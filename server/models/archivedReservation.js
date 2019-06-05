const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ArchivedReservationSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: { type: String },
  surname: { type: String },
  phone: {type: String},
  email: { type: String },
  address: {type: String },
  city: { type: String },
  date: { type: String },
  hour: { type: String },
  info: { type: String }
});

module.exports = ArchivedReservation = mongoose.model('archivedReservation', ArchivedReservationSchema);
