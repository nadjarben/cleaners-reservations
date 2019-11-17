import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { postCustomer } from '../../../store/actions/customerActions';
import { FormattedMessage } from 'react-intl'; 

class FormNewCustomer extends Component {
    state = {
        name: '',
        surname: '', 
        phone: '', 
        email: '', 
        address: '',  
        info: ''
      };

    handleChange = (e) => {
    this.setState ({[e.target.name]: e.target.value})
    }
    
  handleSubmit = (e) => {
    const { name, surname, phone, email, address, info } = this.state
    this.props.postCustomer(name, surname, phone, email, address, info)
  }

    render() {
        return(
          <div style={{marginTop:'5%'}} className='container'>
            
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
    <Form.Control  placeholder="Address" name="address" value={this.state.address} onChange={ this.handleChange }  />
  </Form.Group>

  <Form.Row>
    <Form.Group controlId="formGridCity">
      <Form.Control placeholder="City" name="city" value={this.state.city } onChange={ this.handleChange } />
    </Form.Group>
  </Form.Row>

  <Form.Group className="informations" controlId="exampleForm.ControlTextarea1">
    <Form.Label><FormattedMessage id="reservation.info" /></Form.Label>
    <Form.Control as="textarea" rows="2" name="info" value={this.state.info } onChange={ this.handleChange } />
  </Form.Group>

  <Button type="submit" variant="primary" className="button-submit">
    Submit
  </Button>
</Form>
        </div>
        );
    }
}
FormNewCustomer.propTypes = {
  postCustomer: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  customers: state.customers
})

export default connect(
  mapStateToProps,
  { postCustomer }
)(FormNewCustomer);
