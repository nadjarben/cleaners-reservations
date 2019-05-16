import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import './Contact.css';
class Contacts extends Component {
    render() {
        return (
            <div className="container">
            <Form>
            <Form.Group controlId="formBasicName">
    <Form.Label>Name</Form.Label>
    <Form.Control type="name" placeholder="Name" />
  </Form.Group>
  <Form.Group controlId="formBasicPhone">
    <Form.Label>Phone</Form.Label>
    <Form.Control type="phone" placeholder="Phone number" />
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>
  <Form.Group controlId="formBasicMessage">
    <Form.Label>Message</Form.Label>
    <Form.Control as="textarea" rows="3" placeholder="Your message" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>;
            </div>
        );
    }
}

export default Contacts