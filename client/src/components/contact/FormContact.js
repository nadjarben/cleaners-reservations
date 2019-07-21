import React from 'react';
import { Form } from 'react-bootstrap';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { postContact } from '../../store/actions/contactActions';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


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
          <div style={{backgroundColor:'#DCDCDC', height:'91vh'}}>
          <div className="container">
              <Form onSubmit={e => this.handleSubmit(e)}>            
                  <TextField
                    id="standard-name"
                    label="Name"
                    name='name'
                    value={this.state.name}
                    onChange={this.handleChange}
                    margin="normal"
                  />
                <div className='row'>
                  <div className='col-md-6'>
                    <TextField
                      name="phone"
                      label="Number"
                      value={this.state.phone}
                      onChange={this.handleChange}
                      margin="normal"
                    />
                  </div>
                  <div className='col-md-6'>
                    <TextField
                      name="email"
                      label="Email"
                      value={this.state.email}
                      onChange={this.handleChange}
                      type="email"
                      autoComplete="email"
                      margin="normal"
                    />
                  </div>
                </div>                    
                <TextField
                  name="message"
                  label="Message"
                  value={this.state.message}
                  onChange={this.handleChange}        
                  placeholder="Message"
                  fullWidth
                  multiline
                  rows="3"
                  margin="normal"
                />
              <Button variant="outlined" color="primary" type='submit'>
                Submit
              </Button>
            </Form>
            </div>
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