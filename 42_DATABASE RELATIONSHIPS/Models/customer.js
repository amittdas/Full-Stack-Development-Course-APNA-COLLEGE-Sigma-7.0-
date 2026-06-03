const mongoose = require("mongoose");
const { Schema } = mongoose;


main().then(() => console.log("Connection SuccesSful"))
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}

const customerSchema = new Schema(
    {
        name : String,
        orders : [
            {
                type : Schema.Types.ObjectId,
                ref : "Order",
            }
        ]
    }
)

const orderSchema = new Schema({
    item: String,
    price: Number,
})

// models
const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer", customerSchema);

const addCustomers = async() => {
    let cust1 = new Customer(
        {
            name : "Rahul Kumar",
        }
    )
    let order1 = await Order.findOne({item : "Chips"})
    let order2 = await Order.findOne({item : "Chocolate"})

    cust1.orders.push(order1);
    cust1.orders.push(order2);

    let result = await cust1.save();
    console.log(result);
}
addCustomers();

const findCustomer = async() => {
    let result = await Customer.find({}).populate("orders");
    console.log(result[0]);
}
findCustomer();

const addOrders = async () => {
    let result = await Order.insertMany(
        [
            { item: "Samosa", price: 12 },
            { item: "Chips", price: 10 },
            { item: "Chocolate", price: 10 }
        ]
    )
    console.log(result);
}

addOrders();