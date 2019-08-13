const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  surname: {
    type: String,
    required: true
  },
  phone: {
      type: String,
      required: true
  },
  address: {
      type: String,
      required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  credit: {
      type: Number,
      default: 500
  },
  isAdmin: {
      type: Boolean,
      default: false
  },
  date: {
    type: Date,
    default: Date.now
  },
});
module.exports = User = mongoose.model("users", UserSchema);