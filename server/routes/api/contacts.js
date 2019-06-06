const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const Contact = require('../../models/contact');

const API = //'http://localhost:8080/api/contacts/'
            'https://cleaners-reservation.herokuapp.com/api/contacts/' 


router.get('/',(req,res,next) => {
    Contact.find()
    
    .then(contacts =>  res.json(contacts) );
  })

router.get("/:id", (req, res) => {
    Contact.findById(req.params.id)
    .populate("contact")
    .exec()
    .then(contact => {
      if (!contact) {
        return res.status(404).json({
          message: "Contact not found"
        });
      }
      res.status(200).json({
        contact: contact,
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
    Contact.find({ _id: req.body.contactId})
    const contact = new Contact({
        _id: new mongoose.Types.ObjectId(),
        message: req.body.message,
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
    });
    contact
    .save()
    .then(result => {
        console.log(result);
        res.status(201).json({
            message: ' created contact succesfully',
            createdCustomer: {
                _id: result._id,
                name: result.name,
                phone: result.phone,
                email: result.email,
                message: result.message,
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
    Contact.findById(req.params.id)
      .then(Contact => Contact.remove()
      .then(() => res.json({ success: true })))
      .catch(err => res.status(404).json({ success: false + err }));
  });

  
module.exports = router;
