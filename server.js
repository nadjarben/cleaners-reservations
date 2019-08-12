const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const passport = require("passport");
const reservation = require('./server/routes/api/reservations');
const lastReservation = require('./server/routes/api/lastReservations');
const archviedReservation = require('./server/routes/api/archivedReservations');
const customer = require('./server/routes/api/customers');
const contact = require('./server/routes/api/contacts');
//const gmail = require('./server/routes/api/send');
//const account = require('./server/routes/api/account')
const users = require('./server/routes/api/users');
const app = express();


// Bodyparser Middleware
//app.use('/uploads', express.static('uploads'));
app.use(require("body-parser").text());
app.use(bodyParser.json());
app.use(cors())
// DB Config
const db = require('./server/config/keys').mongoURI;

// Connect to Mongo
mongoose
  .connect(db, {useNewUrlParser: true, useFindAndModify: false}) // Adding new mongo url parser
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
    });

  // Passport middleware
  app.use(passport.initialize());
  // Passport config
  require('./server/config/passport')(passport);

// Use Routes
app.use('/api/reservations', reservation);
app.use('/api/archivedReservations', archviedReservation);
app.use('/api/customers', customer);
app.use('/api/contacts', contact);
app.use('/api/lastreservations', lastReservation);
app.use('/api/users', users);
//app.use('/api/send', gmail);
//app.use('/api/account', account);



//const router = require('express').Router();

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build'));
  });
}
//redirect to HTTPS
app.use (function (req, res, next) {
  if (req.secure) {
          // request was via https, so do no special handling
          next();
  } else {
          // request was via http, so redirect to https
          res.redirect('https://' + req.headers.host + req.url);
  }
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server started on port ${port}`));