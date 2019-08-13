import axios from 'axios';
import { POST_USER, FETCH_USERS, DELETE_USER } from './types';


const usersAPI = //'http://localhost:8080/api/users/' 
                    //'https://cleaners-reservation.herokuapp.com/api/users/'
                    'https://www.thecleanersisrael.com/api/users/'

export const postUser = (name, phone, email, message) => dispatch => {
    axios.post(usersAPI, {
          name, phone, email, message
      })
      .then(res => {
          return dispatch({
            type: POST_USER,
            payload: res.data,
          });       
        })
        .catch(err => {
          console.log(err);
          throw new Error('Couldnt post user.' + err);
        });
  }

 export const deleteUser = (id) => dispatch => {
 axios.delete(usersAPI + id)
 .then(res => {
   return dispatch ({
     type: DELETE_USER,
     payload: res.data
   });
 })
 }
 
  export const fetchUsers = () => dispatch => {

    axios.get(usersAPI, {
    })
      .then(res => { 
        return dispatch({
          type: FETCH_USERS,
          payload: res.data
        });
      })
      .catch(err => {
        console.log(err);
        throw new Error('Could not fetch users.' + err);
      });    
  }