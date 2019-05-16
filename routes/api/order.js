const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')



// @route   GET api/items
// @desc    Get All Items
// @access  Public
// router.get('/', (req, res) => {
//   Product.find().populate('stars').exec()

//     .then(products => res.json(products));
// });

router.get('/',(req,res,next) => {
  
})



module.exports = router;
