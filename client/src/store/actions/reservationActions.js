import axios from 'axios';
import { POST_RESERVATION, FETCH_RESERVATIONS, DELETE_RESERVATION, MAIL_RESERVATION } from './types';


const reservationsAPI = //'http://localhost:8080/api/reservations/' 
                        //'https://cleaners-reservation.herokuapp.com/api/reservations/'
                        'https://www.thecleanersisrael.com/api/reservations/'
const nodeMailerAPI = //'http://localhost:8080/api/send/'
                      'https://www.thecleanersisrael.com/api/send/'



export const postReservation = (name, surname, phone, email, address, date, hour, info, namefact, addressfact, note) => dispatch => {
    axios.post(reservationsAPI, {
          name, surname, phone, email, address, date, hour, info, namefact, addressfact, note
      })
      .then(res => {
          return dispatch({
            type: POST_RESERVATION,
            payload: res.data,
          });       
        })
        .catch(err => {
          console.log(err);
          throw new Error('Couldnt post reservation.' + err);
        });
  }

  export const mailReservation = (name, surname, phone, email, address, date, hour, info, namefact, addressfact, note) => dispatch => {
    axios.post(nodeMailerAPI, {
          name, surname, phone, email, address, date, hour, info, namefact, addressfact, note
      })
      .then(res => {
          return dispatch({
            type: MAIL_RESERVATION,
            payload: res.data,
          });       
        })
        .catch(err => {
          console.log(err);
          throw new Error('Couldnt post reservation.' + err);
        });
  }

 export const deleteReservation = (id) => dispatch => {
 axios.delete(reservationsAPI + id)
 .then(res => {
   return dispatch ({
     type: DELETE_RESERVATION,
     payload: res.data
   });
 })
 }
 
  export const fetchReservations = () => dispatch => {

    axios.get(reservationsAPI, {
    })
      .then(res => { 
        return dispatch({
          type: FETCH_RESERVATIONS,
          payload: res.data
        });
      })
      .catch(err => {
        console.log(err);
        throw new Error('Could not fetch reservations.' + err);
      });    
  }


  