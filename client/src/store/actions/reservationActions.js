import axios from 'axios';
import { POST_RESERVATION, FETCH_RESERVATIONS } from './types';


const reservationsAPI = //'http://localhost:8080/api/reservations/' 
                        'https://cleaners-reservation.herokuapp.com/api/reservations/'

export const postReservation = (name, surname, phone, email, address, city, date, hour, info) => dispatch => {
    axios.post(reservationsAPI, {
          name, surname, phone, email, address, city, date, hour, info
      })
      .then(res => {
          return dispatch({
            type: POST_RESERVATION,
            payload: res.data,
          });       
        })
        .catch(err => {
          console.log(err);
          throw new Error('Couldnt post order.' + err);
        });
  }

  export const fetchReservations = () => dispatch => {

    axios.get(reservationsAPI, {
    })
      .then(res => { 
        let reservations = res.data;
        return dispatch({
          type: FETCH_RESERVATIONS,
          payload: reservations
        });
      })
      .catch(err => {
        console.log(err);
        throw new Error('Could not fetch reservations.' + err);
      });    
  }