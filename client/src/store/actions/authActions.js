import axios from 'axios';
import { POST_LOGIN, FETCH_RESERVATIONS, DELETE_RESERVATION, MAIL_RESERVATION } from './types';


const reservationsAPI = //'http://localhost:8080/api/reservations/' 
                        //'https://cleaners-reservation.herokuapp.com/api/reservations/'
                        'https://www.thecleanersisrael.com/api/reservations/'



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