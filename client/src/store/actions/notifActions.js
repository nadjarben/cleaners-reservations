import axios from 'axios';
import { POST_LAST_RESERVATION, FETCH_LAST_RESERVATIONS, DELETE_LAST_RESERVATION } from './types';

const lastReservationsAPI = //'http://localhost:8080/api/lastreservations/' 
                            //'https://cleaners-reservation.herokuapp.com/api/lastreservations/'
                            'https://www.thecleanersisrael.com/api/lastreservations/'


export const postLastReservation = (name, surname, phone, email, address, date, hour, info, namefact, addressfact, note) => async dispatch => {
    await axios.post(lastReservationsAPI, {
          name, surname, phone, email, address, date, hour, info, namefact, addressfact, note
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
  export const fetchLastReservations = () => async dispatch => {

    await axios.get(lastReservationsAPI, {
    })
      .then(res => { 
        return dispatch({
          type: FETCH_LAST_RESERVATIONS,
          payload: res.data
        });
      })
      .catch(err => {
        console.log(err);
        throw new Error('Could not fetch last reservations.' + err);
      });    
  }

  export const deleteLastReservation = (id) => async dispatch => {
    await axios.delete(lastReservationsAPI + id)
    .then(res => {
      return dispatch ({
        type: DELETE_LAST_RESERVATION,
        payload: res.data
      });
    })
  }