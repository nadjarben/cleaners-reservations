const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const LastReservationSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: { type: String },
  surname: { type: String },
  phone: {type: String},
  email: { type: String },
  address: {type: String },
  date: { type: String },
  hour: { type: String },
  info: { type: String },
  namefact: { type: String },
  addressfact: { type: String },
  note: { type: String}
});


module.exports = LastReservation = mongoose.model('lastReservation', LastReservationSchema);
