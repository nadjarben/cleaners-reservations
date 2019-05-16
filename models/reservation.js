const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ProductSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: { type: String, required: true },
  surname: { type: String, required: true },
  email: { type: String, required: true },
  address: {type: String, required: true},
  city: { type: String, required: true},
  date: { type: String, required: true },
  hour: { type: String, required: true },
  info: { type: String, required: true}
});

module.exports = Product = mongoose.model('product', ProductSchema);
