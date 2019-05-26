const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const ArchivedReservation = require('../../models/archivedReservation');

const API = //'http://localhost:8080/api/reservations/'
            'https://cleaners-reservation.herokuapp.com/api/reservations/' 


router.get('/',(req,res,next) => {
    ArchivedReservation.find()
    
    .then(archivedReservations =>  res.json(archivedReservations) );
  })

router.get("/:id", (req, res) => {
    ArchivedReservation.findById(req.params.id)
    .populate("archivedReservation")
    .exec()
    .then(archivedReservation => {
      if (!archivedReservation) {
        return res.status(404).json({
          message: "Reservation not found"
        });
      }
      res.status(200).json({
        archivedReservation: archivedReservation,
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


module.exports = router;