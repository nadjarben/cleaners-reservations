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
const gmail = require('./server/routes/api/send');
const users = require('./server/routes/api/users');
const app = express();
const sslRedirect = require('heroku-ssl-redirect');


// Bodyparser Middleware
//app.use('/uploads', express.static('uploads'));
app.use(require("body-parser").text());
app.use(bodyParser.json());
app.use(cors())
// DB Config
const db = require('./server/config/keys').mongoURI;

// Connect to Mongo
mongoose
  .connect(db, {useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true}) // Adding new mongo url parser
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
app.use('/api/send', gmail);

// Use ssl
app.use(sslRedirect());


// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder and redirect to https
  app.use(express.static('client/build'));
  app.get('*', (req, res, next) => {
    if(req.url = 'index-fr.html') {
      res.redirect('https://www.thecleanersisrael.com')
    } 
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

//robot.txt
const options = {
  root: path.join(__dirname, '/static'),
  headers: {
    'Content-Type': 'text/plain;charset=UTF-8',
  }
};
app.get('./robots.txt', (req, res) => (
  res.status(200).sendFile('robots.txt', options)
));


const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server started on port ${port}`));