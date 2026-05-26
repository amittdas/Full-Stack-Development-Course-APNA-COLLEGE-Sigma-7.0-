const mongoose = require("mongoose");

// Defining Schema
const chatSchema = new mongoose.Schema({
    from: {
        type: String,
        required: true,
    },
    to: {
        type: String,
        required: true,
    },
    msg: {
        type: String,
        maxLength: 50,
    },
    created_at: {
        type: Date,
        required: true,
    }
});

// Creating Model
const Chat = mongoose.model("Chat", chatSchema);

// Exporting this Chat to index.js
module.exports = Chat;