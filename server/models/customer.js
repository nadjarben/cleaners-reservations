const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const CustomerSchema = new Schema({
  customerId: mongoose.Schema.Types.ObjectId,
  name: { type: String },
  surname: { type: String },
  phone: {type: String},
  email: { type: String },
  address: {type: String },
  info: { type: String },
  orders:{
    orderId: mongoose.Schema.Types.ObjectId,
    hazmana: { type: Number },
    amount: { type: Number },
    date: { type: String },
    payed: { type: Boolean },
    recovered: { type: Boolean },
    info: { type: String },
    term: { type: String },
  }

});

module.exports = Customer = mongoose.model('customer', CustomerSchema);


