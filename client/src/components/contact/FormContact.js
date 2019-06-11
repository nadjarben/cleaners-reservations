import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { postContact } from '../../store/actions/contactActions';


class FormContact extends React.Component {
    state = {
        name: '', 
        phone: '', 
        email: '',    
        message: ''
      };

      handleChange = (e) => {
        this.setState ({[e.target.name]: e.target.value})
        }
        
      handleSubmit = (e) => {
        const textAlert =
        'Votre message a ete envoye nous vous recontacterons dans les plus brefs delais';
        const { name, phone, email, message } = this.state;
        e.preventDefault()
        this.props.postContact(name, phone, email, message)
        alert(textAlert);
      }

    render() {

        return (
          <div className="formcontact">
              <Form onSubmit={e => this.handleSubmit(e)}>
                <Form.Group controlId="formBasicName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Name" name="name" value={this.state.name}  onChange={this.handleChange} />
                </Form.Group>
                <Form.Group controlId="formBasicPhone">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control type="phone" placeholder="Phone number" name="phone" value={this.state.phone}  onChange={this.handleChange} />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" name="email" value={this.state.email}  onChange={this.handleChange} />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows="3" placeholder="Your message" name="message" value={this.state.message}  onChange={this.handleChange} />
                </Form.Group>
              <Button variant="primary" type="submit" className="submit">
                Submit
              </Button>
            </Form>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    contacts: state.contacts
  })
  FormContact.propTypes = {
    postContact: PropTypes.func.isRequired
  };

export default connect(
    mapStateToProps,{ postContact })(FormContact);