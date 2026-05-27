const mongoose = require('mongoose');
const Chat = require('./models/chat.js');

// mongoose
main().then(res => console.log("Connection Succesful"))
    .catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}


// Creating sample data
let allChats = [
    {
        from: "Amit",
        to: "Sumit",
        msg: "All the best",
        created_at: new Date(),
    },
    {
        from: "Rekha",
        to: "Jaya",
        msg: "Hey, Do you take care of Amit ?",
        created_at: new Date(),
    },
    {
        from: "Kangana",
        to: "Hrithik",
        msg: "You played well",
        created_at: new Date(),
    },
    {
        from: "Salman",
        to: "Ash",
        msg: "Do you remember me",
        created_at: new Date(),
    },
    {
        from: "Virat",
        to: "Gambhir",
        msg: "Please dont remove me from team",
        created_at: new Date(),
    },
]

// Saving into the mongoDb
Chat.insertMany(allChats);