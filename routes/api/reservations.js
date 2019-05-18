const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')

const Reservation = require('../../models/reservation');


// @route   GET api/items
// @desc    Get All Items
// @access  Public
// router.get('/', (req, res) => {
//   Product.find().populate('stars').exec()

//     .then(products => res.json(products));
// });

router.get('/',(req,res,next) => {
  Reservation.find()
  
  .then(reservations =>  res.json(reservations) );
})

router.post('/', (req, res) => {
    Reservation.find({ _id: req.body.reservationId})
    const reservation = new Reservation({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        surname: req.body.surname,
        email: req.body.email,
        address: req.body.address,
        city: req.body.city,
        date: req.body.date,
        hour: req.body.hour,
        info: req.body.info,
    });
    reservation
    .save()
    .then(result => {
        console.log(result);
        res.status(201).json({
            message: ' created reservation succesfully',
            createdReservation: {
                _id: result._id,
                name: result.name,
                surname: result.surname,
                email: result.email,
                address: result.address,
                city: result.city,
                date: result.date,
                hour: result.hour,
                info: result.info,
                request: {
                    type: 'POST',
                    //url: 'http://localhost:8001/api/reservations/' + result._id
                    url: 'http://cleaners-reservation.herokuapp.com/api/reservations/' + result._id
                }
            }
        });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error:err
            })
        });     
})

// @route   DELETE api/items/:id
// @desc    Delete A Item
// @access  Public
router.delete('/:id', (req, res) => {
  Reservation.findById(req.params.id)
    .then(reservation => reservation.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
