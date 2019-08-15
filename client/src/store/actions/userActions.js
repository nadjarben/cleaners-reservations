import axios from 'axios';
import { POST_USER, FETCH_USERS, DELETE_USER, ADD_CREDIT_TO_USER, CHANGE_USER_NAME } from './types';


const usersAPI = //'http://localhost:8080/api/users/' 
                    //'https://cleaners-reservation.herokuapp.com/api/users/'
                    'https://www.thecleanersisrael.com/api/users/'

export const postUser = (name, phone, email, message) => async dispatch => {
    await axios.post(usersAPI, {
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

 export const deleteUser = (id) => async dispatch => {
 await axios.delete(usersAPI + id)
 .then(res => {
   return dispatch ({
     type: DELETE_USER,
     payload: res.data
   });
 })
 }

 export const addCreditToUser = (id, credit) => async dispatch => {
    await axios.post(usersAPI + id, {
        credit
        })
    .then(res => {
      return dispatch ({
        type: ADD_CREDIT_TO_USER,
        payload: res.data
      });
    })
  }

  export const changeUserName = (id, name, surname, phone, email, address) => async dispatch => {
    await axios.post(usersAPI + 'modify/'  + id, {
        name, surname, phone, email, address
        })
    .then(res => {
      return dispatch ({
        type: CHANGE_USER_NAME,
        payload: res.data
      });
    })
  }
 
    export const fetchUsers = () => async dispatch => {

    await axios.get(usersAPI, {
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