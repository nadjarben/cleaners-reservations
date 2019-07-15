const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ReservationSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: { type: String },
  surname: { type: String },
  phone: {type: String},
  email: { type: String },
  address: {type: String },
  city: { type: String },
  date: { type: String },
  hour: { type: String },
  info: { type: String },
  namefact: { type: String },
  addressefact: { type: String },
  note: { type: String}
});


module.exports = Reservation = mongoose.model('reservation', ReservationSchema);
