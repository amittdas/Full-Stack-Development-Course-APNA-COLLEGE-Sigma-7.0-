const mongoose = require('mongoose');

// Connecting MongoDB with Node.js
main()
    .then(res => console.log("connection succesful"))
    .catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}


// Schema Types Options
const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxLength: 20
    },
    author: {
        type: String
    },
    price: {
        type: Number,
        min: 1,
    },
    discount: {
        type: Number,
        default: 0
    },
    category: {
        type: String,
        enum: ["Fiction", "Non-fiction"],
    },
    genre: [String],
});

const Book = mongoose.model("Book", bookSchema);

Book.findByIdAndUpdate("6a0c274b3bd6f9bab6df7f85", {price: -500})
    .then(res => console.log(res))
    .catch(err => console.log(err));

// let book1 = new Book({
//     title: "Marvel comics v2",
//     price: "600",
//     genre: ["Comics", "Superhero", "Fiction"],
// });

// book1.save()
//         .then(res => console.log(res))
//         .catch(err => console.log(err));