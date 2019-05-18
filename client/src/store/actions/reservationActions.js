import axios from 'axios';
import { POST_RESERVATION } from './types';



export const postReservation = (name, surname, phone, email, address, city, date, hour, info) => dispatch => {
    axios.post(`http://localhost:8001/api/reservations`, {
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