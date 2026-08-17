const mongoose = require('mongoose')
const initData = require('./data.js')
const Listing = require("../models/listing.js")

// CONNECTING TO DATABASE
const MONGO_URL = 'mongodb://127.0.0.1:27017/wanderlust';
main().then(res => console.log("Connection succesful"))
    .catch(err => console.log(err));
async function main() {
    await mongoose.connect(MONGO_URL);
}

// Initializing data from data.js file
const initDB = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({...obj, owner : '6a283636eb36f1f85657c2b2'}))
    await Listing.insertMany(initData.data);
    console.log("Data was initialized !");
}

initDB();