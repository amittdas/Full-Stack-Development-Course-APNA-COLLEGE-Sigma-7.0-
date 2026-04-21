const express = require("express");
const app = express();
const path = require("path");

let port = 8080;

app.set("view engine", "ejs") ;
app.set("views", path.join(__dirname, "/views")) ;

app.get("/", (req,res) => {
    res.render("home.ejs");
})

app.get("/hello", (req,res) => {
    res.send("HELLOOO");
})

app.get("/rollDice", (req,res) => {
    let diceVal = Math.floor(Math.random()*6)+1 ;
    res.render("rollDice.ejs", {diceVal});
})

app.listen(port, () => {
    console.log(`App is litsening on port ${port}`)
})