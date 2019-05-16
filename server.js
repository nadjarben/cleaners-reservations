const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors')
//const product = require('./routes/api/products');
//const cartProduct = require('./routes/api/cartProducts')
//const stripe = require("stripe")("sk_test_SB12cBiQkwOFe3EDadGXrwPN");
const app = express();

// Bodyparser Middleware
//app.use('/uploads', express.static('uploads'));
app.use(require("body-parser").text());
app.use(bodyParser.json());
app.use(cors())
// DB Config
const db = require('./config/keys').mongoURI;

// Connect to Mongo
mongoose
  .connect(db, {useNewUrlParser: true}) // Adding new mongo url parser
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

// Use Routes
//app.use('/api/products', product);
//app.use('/api/cartProducts', cartProduct);
// app.use('/api/stars', star)

const router = require('express').Router();




// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 8001;

app.listen(port, () => console.log(`Server started on port ${port}`));