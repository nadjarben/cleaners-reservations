const router = require('express').Router()
const nodemailer = require('nodemailer');
const creds = require('../../config/keysGmail');

module.exports = router;

let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  auth: {
  user: creds.USER,
  pass: creds.PASS
  },
  tls: {
      rejectUnauthorized: false
  }
});

router.post('/', (req, res) => {
  // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        auth: {
        user: creds.USER,
        pass: creds.PASS
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    // setup email data with unicode symbols
    var name = req.body.name
    var surname = req.body.surname
    var date = req.body.date
    var phone = req.body.phone
    var hour = req.body.hour
    var address = req.body.address
    var note = req.body.note
    var info = req.body.info

    var content= `Nouvelle reservation de :${name} ${surname}<br/>
    Le: ${date} a ${hour} <br/>
    Adressse: ${address} <br/>
    Tel: ${phone} <br/>
    Note: ${note} <br/>
    Info: ${info}`
    let mailOptions = {
        from: creds.USER, // sender address
        to: 'nadjarbenj@gmail.com', // list of receivers
        subject: 'Nouvelle reservation!', // Subject line
        text: 'Bonjour, vous avez recu une nouvelle resa', // plain text body
        html: content // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
    });
});
