const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ReservationSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: { type: String },
  surname: { type: String },
  email: { type: String },
  address: {type: String },
  city: { type: String },
  date: { type: String },
  hour: { type: String },
  info: { type: String }
});

module.exports = Product = mongoose.model('reservation', ReservationSchema);
