import axios from 'axios';
import { POST_CONTACT, FETCH_CONTACTS, DELETE_CONTACT } from './types';


const contactsAPI = //'http://localhost:8080/api/contacts/' 
                        'https://cleaners-reservation.herokuapp.com/api/contacts/'

export const postContact = (name, surname, phone, email, address, city, info) => dispatch => {
    axios.post(contactsAPI, {
          name, surname, phone, email, address, city, info
      })
      .then(res => {
          return dispatch({
            type: POST_CONTACT,
            payload: res.data,
          });       
        })
        .catch(err => {
          console.log(err);
          throw new Error('Couldnt post contact.' + err);
        });
  }

 export const deleteContact = (id) => dispatch => {
 axios.delete(contactsAPI + id)
 .then(res => {
   return dispatch ({
     type: DELETE_CONTACT,
     payload: res.data
   });
 })
 }
 
  export const fetchContacts = () => dispatch => {

    axios.get(contactsAPI, {
    })
      .then(res => { 
        return dispatch({
          type: FETCH_CONTACTS,
          payload: res.data
        });
      })
      .catch(err => {
        console.log(err);
        throw new Error('Could not fetch contacts.' + err);
      });    
  }