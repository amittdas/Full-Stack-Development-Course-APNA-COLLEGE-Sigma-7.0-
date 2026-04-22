const express = require("express");
const app = express();
const path = require("path");

let port = 8080;

app.set("view engine", "ejs") ;
app.set("views", path.join(__dirname, "/views")) ;

app.get("/", (req,res) => {
    res.render("home.ejs");
})

app.get("/ig/:username", (req,res) => {
    const followers = ["adam", "bob", "steve", "abc"]
    let { username } = req.params;
    res.render("instagram.ejs", {username, followers});
})

app.listen(port, () => {
    console.log(`App is litsening on port ${port}`)
})