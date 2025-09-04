const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  status: String,
  amount: Number
});

const Order = mongoose.model("Order", orderSchema);

mongoose.connect("mongodb://127.0.0.1:27017/testdb")
  .then(() => {
    return Promise.all([
      Order.create({ status: "pending", amount: 100 }),
      Order.create({ status: "pending", amount: 50 }),
      Order.create({ status: "completed", amount: 200 }),
      Order.create({ status: "completed", amount: 300 })
    ]);
  })
  .then(() => {
    return Order.aggregate([
      { $group: { _id: "$status", total: { $sum: "$amount" } } }
    ]);
  })
  .then(result => {
    console.log(result);
    return mongoose.disconnect();
  })
  .catch(err => console.error("Error:", err));
