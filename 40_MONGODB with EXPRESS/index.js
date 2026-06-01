
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const Chat = require('./models/chat.js');
const methodOverride = require('method-override');
const ExpressError = require("./ExpressError.js");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));

// mongoose
main().then(res => console.log("Connection Succesful"))
    .catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp');
}


// INDEX ROUTE
app.get("/chats",
    asyncWrap(async (req, res) => {
        let chats = await Chat.find();
        res.render("index.ejs", {chats});
    })
)

// NEW ROUTE
app.get("/chats/new", (req, res) => {
    // throw new ExpressError(404, "Page not found !");
    res.render("new.ejs")
})

// CREATE ROUTE
app.post("/chats",
    asyncWrap((req, res) => {
            let { from, msg, to } = req.body;
            let newChat = new Chat({
            from: from,
            msg: msg,
            to: to,
            created_at: new Date()
        });
        newChat.save();
        res.redirect("/chats");
    })
);

function asyncWrap(fn){
    return function(req, res, next){
        fn(req, res, next).catch((err) => next(err));
    }
}

// SHOW ROUTE
app.get("/chats/:id",
    asyncWrap(async (req, res, next) => {
        let {id} = req.params;
        let chat = await Chat.findById(id);
        if(!chat){
        next(new ExpressError(404, "Chat not found"));
        }
        res.render("edit.ejs", { chat });
    })
)

// EDIT ROUTE
app.get("/chats/:id/edit",
    asyncWrap(async (req, res) => {
        let { id } = req.params;
        let chat = await Chat.findById(id);
        res.render("edit.ejs", { chat });
    })
);

// UPDATE ROUTE
app.put("/chats/:id",
    asyncWrap(async (req, res) => {
        let { id } = req.params;
        let { msg: newMsg } = req.body;
        let updatedChat = await Chat.findByIdAndUpdate(
            id,
            {msg: newMsg},
            {runValidators: true, new: true}
        );
        console.log(updatedChat);
        res.redirect("/chats");
    })
)

// DELETE ROUTE
app.delete("/chats/:id",
    asyncWrap(async (req, res) => {
        let { id } = req.params;
        let deletedChat = await Chat.findByIdAndDelete(id);
        console.log(deletedChat);
        res.redirect("/chats");
    })
)

app.get("/", (req, res) => {
    res.send("Route is working");
})


// mongoose error
const handleValidationErr = (err) => {
    console.log("This is a validation error");
    console.dir(err);
    return err;
}

app.use((err, req, res, next) => {
    console.log(err.name);
    if(err.name === "ValidationError"){
        err = handleValidationErr(err);
    }
    next(err);
})

// Error handling middleware
app.use((err, req, res, next) => {
    let {status = 500, message = "Some ERROR occured !"} = err;
    res.status(status).send(message);
})

app.listen(8080, () => {
    console.log("App is listening to port : 8080");
})