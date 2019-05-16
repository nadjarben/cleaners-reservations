import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import './Reservation.css';

class Reservation extends Component {
    render() {
        return(
        <div className="reservation">
            <div className="service">
                <p>* free service with a minimum of 100 nis orders</p>
                <p>* 20 nis for delivery</p>
                <p>* We will call you in the hour to confirm order</p>
            </div>
            <Form className="form">
  <Form.Row>
    <Form.Group controlId="formGridFirstName">
      <Form.Control required="true" type="text" placeholder="First Name" />
    </Form.Group>
    <Form.Group controlId="formGridSurname">
      <Form.Control required="true" type="text" placeholder="Last Name" />
    </Form.Group>
  </Form.Row>
  
  <Form.Row>
  <Form.Group controlId="formGridPhone">
      <Form.Control required="true" type="phone" placeholder="Phone number" />
    </Form.Group>
  </Form.Row>

  <Form.Group controlId="formBasicEmail">
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>

  <Form.Group controlId="formGridAddress1">
    <Form.Control required="true" placeholder="Address" />
  </Form.Group>

  <Form.Row>
    <Form.Group controlId="formGridCity">
      <Form.Control required="true" placeholder="City" />
    </Form.Group>
  </Form.Row>

  <Form.Row>
    <Form.Group className="date" controlId="formGridDate">
    <Form.Label>Date :</Form.Label>
      <Form.Control required="true" type= "date" />
    </Form.Group>

    <Form.Group className="hour" controlId="formGridHour">
    <Form.Label>Hour :</Form.Label>
      <Form.Control required="true" type= "time" placeholder="10:30" />
    </Form.Group>
  </Form.Row>

  <Form.Group className="informations" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Complementaries Informations (digicode, commentaries ...)</Form.Label>
    <Form.Control as="textarea" rows="2" />
  </Form.Group>

  <Button variant="primary" type="submit" className="button-submit">
    Submit
  </Button>
</Form>
        </div>
        );
    }
}

export default Reservation
