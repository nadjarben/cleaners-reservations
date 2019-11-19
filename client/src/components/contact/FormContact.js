import React, {useState} from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { postContact } from '../../store/actions/contactActions';
import Button from '@material-ui/core/Button';
import { FormattedMessage } from 'react-intl'; 
import TextField from '@material-ui/core/TextField';


function FormContact(props) {
  const [ contact, setContact ] = useState({name: '', phone: '', email: '', message: ''})
  
      const handleChange = (e) => {
        setContact ({...contact, [e.target.name]: e.target.value})
        }
        
      const handleSubmit = (e) => {
        const textAlert =
        'Votre message a ete envoye nous vous recontacterons dans les plus brefs delais';
        e.preventDefault()
        const { name, phone, email, message } = contact;
        props.postContact(name, phone, email, message)
        alert(textAlert);
      }
  
      const labelName = <FormattedMessage id='contact.name' />;
      const labelNumber = <FormattedMessage id='contact.number' />;
      const labelEmail = <FormattedMessage id='contact.email' />;
      const labelMessage = <FormattedMessage id='contact.message' />;
      

        return (
          <div className="container">
              <form onSubmit={handleSubmit}  >          
                  <TextField
                    label={labelName}
                    name='name'
                    value={contact.name}
                    onChange={handleChange}
                    margin="normal"
                    required
                  />
                <div className='row'>
                  <div className='col-md-6'>
                    <TextField
                      name="phone"
                      label={labelNumber}
                      value={contact.phone}
                      onChange={handleChange}
                      margin="normal"
                    />
                  </div>
                  <div className='col-md-6'>
                    <TextField
                      name="email"
                      label={labelEmail}
                      value={contact.email}
                      onChange={handleChange}
                      type="email"
                      autoComplete="email"
                      margin="normal"
                      required
                    />
                  </div>
                </div>                    
                <TextField
                  name="message"
                  label={labelMessage}
                  value={contact.message}
                  onChange={handleChange}        
                  placeholder="Message"
                  fullwidth
                  multiline
                  rows="3"
                  margin="normal"
                  required
                />
              <Button style={{marginTop:'5%'}} variant="outlined" color="primary" type='submit'>
                Submit
              </Button>
            </form>
            </div>
        );
    }
const mapStateToProps = state => ({
    contacts: state.contacts
  })
  FormContact.propTypes = {
    postContact: PropTypes.func.isRequired
  };

export default connect(
    mapStateToProps,{ postContact })(FormContact);