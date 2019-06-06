const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ContactSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: { type: String },
  phone: {type: String},
  email: { type: String },
  message: { type: String }
});

module.exports = Contact = mongoose.model('contact', ContactSchema);
