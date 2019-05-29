import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import './Reservation.css';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { postReservation } from '../store/actions/reservationActions';
import NavBar from '../components/NavBar';
import { FormattedMessage } from 'react-intl'; 

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
  }

  handleSubmit = (e) => {
    const textAlert =
    'Votre commande a bien ete passee, nous vous reconfirmerons par message dans lheure, ' +
    'En cas dimprevus veuillez nous contacter au 0586305515.'
    const { name, surname, phone, email, address, city, date, hour, info } = this.state
    e.preventDefault()
    this.props.postReservation(name, surname, phone, email, address, city, date, hour, info)
    alert(textAlert);
      this.props.history.push('/home');
  }

    render() {
        return(
          <div>
            <NavBar />
        <div className="reservation">
            <div className="service">
                <p><FormattedMessage id="reservation.min" /></p>
                <p><FormattedMessage id="reservation.min2" /></p>
                <p><FormattedMessage id="reservation.min3" /></p>
            </div>
            <Form onSubmit={e => this.handleSubmit(e)} className="form" >
  <Form.Row>
    <Form.Group controlId="formGridFirstName" >
      <Form.Control required={true} type="text" placeholder="First Name" name="name" value={this.state.name}  onChange={this.handleChange} />
    </Form.Group>

    <Form.Group controlId="formGridSurname">
      <Form.Control required={true} type="text" placeholder="Last Name" name="surname" value={this.state.surname} onChange={ this.handleChange } />
    </Form.Group>
  </Form.Row>
  
  <Form.Row>
  <Form.Group controlId="formGridPhone">
      <Form.Control required={true} type="phone" placeholder="Phone number" name="phone" value={this.state.phone} onChange={ this.handleChange } />
    </Form.Group>
  </Form.Row>

  <Form.Group controlId="formBasicEmail">
    <Form.Control type="email" placeholder="Enter email" name="email" value={this.state.email} onChange={ this.handleChange } />
  </Form.Group>

  <Form.Group controlId="formGridAddress1">
    <Form.Control required={true} placeholder="Address" name="address" value={this.state.address} onChange={ this.handleChange }  />
  </Form.Group>

  <Form.Row>
    <Form.Group controlId="formGridCity">
      <Form.Control required={true} placeholder="City" name="city" value={this.state.city } onChange={ this.handleChange } />
    </Form.Group>
  </Form.Row>

  <Form.Row>
    <Form.Group className="date" controlId="formGridDate"  >
    <Form.Label><FormattedMessage id="reservation.date" /></Form.Label>
      <Form.Control required={true} type= "date" name="date" value={this.state.date } onChange={ this.handleChange } />
    </Form.Group>

    <Form.Group className="hour" controlId="formGridHour">
    <Form.Label><FormattedMessage id="reservation.hour" /></Form.Label>
      <Form.Control required={true} type= "time" placeholder="10:30" name="hour" value={this.state.hour} onChange={ this.handleChange } />
    </Form.Group>
  </Form.Row>

  <Form.Group className="informations" controlId="exampleForm.ControlTextarea1">
    <Form.Label><FormattedMessage id="reservation.info" /></Form.Label>
    <Form.Control as="textarea" rows="2" name="info" value={this.state.info } onChange={ this.handleChange } />
  </Form.Group>

  <Button type="submit" variant="primary" className="button-submit" >
    Submit
  </Button>
</Form>
        </div>
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
