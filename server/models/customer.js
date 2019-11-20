const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const CustomerSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: { type: String },
  surname: { type: String },
  phone: {type: String},
  email: { type: String },
  address: {type: String },
  info: { type: String },
  orders:{
    _id: mongoose.Schema.Types.ObjectId,
    hazmana: { type: Number },
    amount: { type: Number },
    date: { type: Date },
    payed: { type: Boolean },
    recovered: { type: Boolean, default: false },
    info: { type: String },
    term: { type: String },
  }

});

module.exports = Customer = mongoose.model('customer', CustomerSchema);


