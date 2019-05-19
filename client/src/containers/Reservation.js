import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import './Reservation.css';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { postReservation } from '../store/actions/reservationActions';

class Reservation extends Component {
  state = {
    name: '',
    surname: '', 
    phone: '', 
    email: '', 
    address: '', 
    city: '', 
    date: '', 
    hour: '', 
    info: ''
  };
  handleChange = (e) => {
    this.setState ({[e.target.name]: e.target.value})
    console.log(this.state.date)
    //onSubmit={this.props.postReservation(this.state.name)}
  }

  handleSubmit = (e) => {
    const textAlert = 
    'Votre commande a bien ete passee, nous vous reconfirmerons par message dans lheure, ' +
    'En cas dimprevus veuillez nous contacter au 0586305515.'
    const { name, surname, phone, email, address, city, date, hour, info } = this.state
    e.preventDefault()
    this.props.postReservation(name, surname, phone, email, address, city, date, hour, info)
    alert(textAlert);
  }

    render() {
        return(
        <div className="reservation">
            <div className="service">
                <p>* free service with a minimum of 100 nis orders</p>
                <p>* 20 nis for delivery</p>
                <p>* We will call you in the hour to confirm order</p>
            </div>
            <Form className="form" >
  <Form.Row>
    <Form.Group controlId="formGridFirstName" >
      <Form.Control required="true" type="text" placeholder="First Name" name="name" value={this.state.name}  onChange={this.handleChange} />
    </Form.Group>

    <Form.Group controlId="formGridSurname">
      <Form.Control required="true" type="text" placeholder="Last Name" name="surname" value={this.state.surname} onChange={ this.handleChange } />
    </Form.Group>
  </Form.Row>
  
  <Form.Row>
  <Form.Group controlId="formGridPhone">
      <Form.Control required="true" type="phone" placeholder="Phone number" name="phone" value={this.state.phone} onChange={ this.handleChange } />
    </Form.Group>
  </Form.Row>

  <Form.Group controlId="formBasicEmail">
    <Form.Control type="email" placeholder="Enter email" name="email" value={this.state.email} onChange={ this.handleChange } />
  </Form.Group>

  <Form.Group controlId="formGridAddress1">
    <Form.Control required="true" placeholder="Address" name="address" value={this.state.address} onChange={ this.handleChange }  />
  </Form.Group>

  <Form.Row>
    <Form.Group controlId="formGridCity">
      <Form.Control required="true" placeholder="City" name="city" value={this.state.city } onChange={ this.handleChange } />
    </Form.Group>
  </Form.Row>

  <Form.Row>
    <Form.Group className="date" controlId="formGridDate"  >
    <Form.Label>Date :</Form.Label>
      <Form.Control required="true" type= "date" name="date" value={this.state.date } onChange={ this.handleChange } />
    </Form.Group>

    <Form.Group className="hour" controlId="formGridHour">
    <Form.Label>Hour :</Form.Label>
      <Form.Control required="true" type= "time" placeholder="10:30" name="hour" value={this.state.hour} onChange={ this.handleChange } />
    </Form.Group>
  </Form.Row>

  <Form.Group className="informations" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Complementaries Informations (digicode, commentaries ...)</Form.Label>
    <Form.Control as="textarea" rows="2" name="info" value={this.state.info } onChange={ this.handleChange } />
  </Form.Group>

  <Button onClick={this.handleSubmit} variant="primary" className="button-submit" >
    Submit
  </Button>
</Form>
        </div>
        );
    }
}
Reservation.propTypes = {
  postReservation: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  reservations: state.reservations
})

export default connect(
  mapStateToProps,
  { postReservation }
)(Reservation);
