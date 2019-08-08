const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Create Schema
const UserSchema = new mongoose.Schema({
  firstName: {
      type: String,
      default: ''
  },
  lastName: {
      type: String,
      default: ''
  },
  email: {
      type: String,
      default: ''
  },
  password: {
      type: String,
      default: ''
  },
  isDeleted: {
      type: Boolean,
      default: false
  },
  credit: {
      type: Number,
      default: 0
  }
});

UserSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

UserSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

module.exports = User = mongoose.model('User', UserSchema);
