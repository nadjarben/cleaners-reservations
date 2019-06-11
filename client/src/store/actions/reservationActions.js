import axios from 'axios';
import { POST_RESERVATION, FETCH_RESERVATIONS, DELETE_RESERVATION, POST_LAST_RESERVATION, DELETE_LAST_RESERVATION } from './types';


const reservationsAPI = //'http://localhost:8080/api/reservations/' 
                        'https://cleaners-reservation.herokuapp.com/api/reservations/'
const lastReservationsAPI = //'http://localhost:8080/api/lastreservations/' 
                        'https://cleaners-reservation.herokuapp.com/api/lastreservations/'


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

  export const archiveReservation = () => dispatch => {
   // axios.
   // return dispatch({
    //  type: ARCHIVE_RESERVATION,
    //  payload: res.data
   // });
  }


  // Last reservation

  export const postLastReservation = (name, surname, phone, email, address, city, date, hour, info) => dispatch => {
    axios.post(lastReservationsAPI, {
          name, surname, phone, email, address, city, date, hour, info
      })
      .then(res => {
          return dispatch({
            type: POST_LAST_RESERVATION,
            payload: res.data,
          });       
        })
        .catch(err => {
          console.log(err);
          throw new Error('Couldnt post last reservation.' + err);
      });
  }

  export const deleteLastReservation = (id) => dispatch => {
    axios.delete(lastReservationsAPI + id)
    .then(res => {
      return dispatch ({
        type: DELETE_LAST_RESERVATION,
        payload: res.data
      });
    })
  }