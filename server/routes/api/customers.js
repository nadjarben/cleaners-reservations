const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const Customer = require('../../models/customer');


const API = //'http://localhost:8080/api/customers/'
            //'https://cleaners-reservation.herokuapp.com/api/customers/'
            'https://www.thecleanersisrael.com/api/customers/'


router.get('/',(req,res,next) => {
    Customer.find()
    
    .then(customers =>  res.json(customers) );
  })

router.get("/:id", (req, res) => {
    Customer.findById(req.params.id)
    .then(customer => {
      if (!customer) {
        return res.status(404).json({
          message: "Customer not found"
        });
      }
      res.status(200).json({
        customer: customer
      });
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    })
})

router.post('/', (req, res) => {
    Customer.find({ _id: req.body.customerId})
    const customer = new Customer({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        surname: req.body.surname,
        phone: req.body.phone,
        email: req.body.email,
        address: req.body.address,
        info: req.body.info,
        orders: req.body.orders
    });
    customer
    .save()
    .then(result => {
        console.log(result);
        res.status(201).json({
            message: ' created order succesfully',
            createdCustomer: {
                result,
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
    Customer.findById(req.params.id)
      .then(Customer => Customer.remove()
      .then(() => res.json({ success: true })))
      .catch(err => res.status(404).json({ success: false + err }));
  });

  //get customers orders

  router.get("/:id/orders", (req, res) => {
    Customer.findById(req.params.id)
    .then(customer => {
      if (!customer) {
        return res.status(404).json({
          message: "Customer not found"
        });
      }
      res.status(200).json({
        orders: customer.orders,
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

//post customers orders
router.post('/:id',(req,res) => {
  Customer.update(
   {_id: req.params.id },
    {
      $push: {
        orders: {
          _id: new mongoose.Types.ObjectId(),
          hazmana: req.body.hazmana,
          amount: req.body.amount,
          term: req.body.term,
          info: req.body.info,
          payed: req.body.payed,
          recovered: req.body.recovered,
          date: Date.now()
        }
      }
    })
  .then(order =>  res.json(order) )
  .catch(err => res.status(404).json({ success: false + err }));
})
  
  
module.exports = router;
