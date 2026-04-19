const express = require("express");
const app = express();

console.dir(app)

let port = 8080;

//HANDLING A REQUEST
app.listen(port, ()=> {
    console.log(`App is listening on port ${port}`)
})

//SENDING A RESPONSE
// app.use((req, res) => {
//     // console.log(req)
//     console.log("request recieved")
//     res.send("This is a basic Response")
// })


//ROUTING
app.get("/", (req, res) => {
    res.send("Hello AMIT I am root path");
});
// app.get("/apple", (req, res) => {
//     res.send("You contacted apple path");
// });
// app.get("/orange", (req, res) => {
//     res.send("You contacted orange path");
// });
// app.use((req, res) => {
//     res.send("This path does not exist");
// });

// ROUTING THROUGH PATH PARAMETERS
app.get("/:username/:id", (req, res) => {
    let { username, id } = req.params;
    console.log(username)
    console.log(id)
    let code = `<h1>Welcome to the page of @${username}</h1>` ;
    res.send(code);
});

//QUERY STRINGS
app.get("/search", (req,res)=>{
    let { q } = req.query;
    if(!q){
        res.send("<h1>Nothing searched<h1>")
    }
    let code = `<h1>Search result for query = ${q}<h1>`
    res.send(code);
    console.log(q)
})