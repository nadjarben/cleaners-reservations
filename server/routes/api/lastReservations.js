const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const LastReservation = require('../../models/lastReservation');

const API = //'http://localhost:8080/api/lastreservations/'
            //'https://cleaners-reservation.herokuapp.com/api/lastreservations/'
            'https://www.thecleanersisrael.com/api/lastreservations/'


router.get('/',(req,res,next) => {
    LastReservation.find()
    
    .then(lastReservations =>  res.json(lastReservations) );
  })

router.get("/:id", (req, res) => {
    LastReservation.findById(req.params.id)
    .populate("lastReservation")
    .exec()
    .then(lastReservation => {
      if (!lastReservation) {
        return res.status(404).json({
          message: "LastReservation not found"
        });
      }
      res.status(200).json({
        lastReservation: lastReservation,
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
    LastReservation.find({ _id: req.body.lastReservationId})
    const lastReservation = new LastReservation({
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
        addressfact: req.body.addressfact,
        note: req.body.note,
    });
    lastReservation
    .save()
    .then(result => {
        console.log(result);
        res.status(201).json({
            message: ' created lastReservation succesfully',
            createdLastReservation: {
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
              addressfact: result.info,
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
    LastReservation.findById(req.params.id)
      .then(LastReservation => LastReservation.remove()
      .then(() => res.json({ success: true })))
      .catch(err => res.status(404).json({ success: false + err }));
  });

  
module.exports = router;
