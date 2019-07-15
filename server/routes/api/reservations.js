const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const Reservation = require('../../models/reservation');

const API = //'http://localhost:8080/api/reservations/'
            //'https://cleaners-reservation.herokuapp.com/api/reservations/' 
            'https://www.thecleanersisrael.com/api/reservations/'


router.get('/',(req,res,next) => {
    Reservation.find()
    
    .then(reservations =>  res.json(reservations) );
  })

router.get("/:id", (req, res) => {
    Reservation.findById(req.params.id)
    .populate("reservation")
    .exec()
    .then(reservation => {
      if (!reservation) {
        return res.status(404).json({
          message: "Reservation not found"
        });
      }
      res.status(200).json({
        reservation: reservation,
        request: {
          type: "GET",
          url: API 
        }
      });
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    })
})

router.post('/', (req, res) => {
    Reservation.find({ _id: req.body.reservationId})
    const reservation = new Reservation({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        surname: req.body.surname,
        phone: req.body.phone,
        email: req.body.email,
        address: req.body.address,
        city: req.body.city,
        date: req.body.date,
        hour: req.body.hour,
        info: req.body.info,
        namefact: req.body.namefact,
        addressefact: req.body.addressefact,
        note: req.body.note,
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
                phone: result.phone,
                email: result.email,
                address: result.address,
                city: result.city,
                date: result.date,
                hour: result.hour,
                info: result.info,
                namefact: result.info,
                addressefact: result.info,
                note: result.info,
                request: {
                    type: 'POST',
                    url: API + result._id
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

router.delete('/:id', (req, res) => {
    Reservation.findById(req.params.id)
      .then(Reservation => Reservation.remove()
      .then(() => res.json({ success: true })))
      .catch(err => res.status(404).json({ success: false + err }));
  });

  
module.exports = router;
