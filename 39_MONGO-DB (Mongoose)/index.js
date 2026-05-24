const mongoose = require('mongoose');

// Connecting MongoDB with Node.js
main()
    .then(res => console.log("connection succesful"))
    .catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}


const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
});

// creating collections
const User = mongoose.model("User", userSchema);

// Delete from mongoDb
User.findByIdAndDelete("6a0b4d999acd1e1c2eafdd26")
    .then(res => console.log(res))
    .catch(err => console.log(err));


// // Find one & Update
// User.findOneAndUpdate({name: "Bruce"}, {age: 42}, {new: true})
//     .then(res => console.log(res))
//     .catch(err => console.log(err));



// // Updation in the database
// User.updateMany({age: {$gt: 48} }, {age: 55})
//     .then(res => console.log(res))
//     .catch(err => console.log(err));

// // Finding users
// User.find({age: {$gt: 47}})
//             .then(res => console.log(res))
//             .catch(err => console.log(err));

// // Inserting new data to mongoDB
// const user2 = new User({
//     name: "Eve",
//     email: "eve@gmail.com",
//     age: 48
// });
// user2
//     .save()
//     .then(res => console.log(res))
//     .catch(err => console.log(err))

// Inserting multiple
// User.insertMany([
//     {name: "Tony", email: "tony@gmail.com", age: 50 },
//     {name: "Peter", email: "peter@gmail.com", age: 30 },
//     {name: "Bruce", email: "bruce@gmail.com", age: 47},
// ]).then(res => console.log(res));
