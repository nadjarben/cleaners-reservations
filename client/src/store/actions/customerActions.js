import axios from 'axios';
import { POST_CUSTOMER, FETCH_CUSTOMERS, DELETE_CUSTOMER, POST_ORDER } from './types';


const customersAPI = //'http://localhost:8080/api/customers/' 
                     //'https://cleaners-reservation.herokuapp.com/api/customers/'
                     'https://www.thecleanersisrael.com/api/customers/'

export const postCustomer = (name, surname, phone, email, address, info) => dispatch => {
    axios.post(customersAPI, {
          name, surname, phone, email, address, info
      })
      .then(res => {
          return dispatch({
            type: POST_CUSTOMER,
            payload: res.data,
          });       
        })
        .catch(err => {
          console.log(err);
          throw new Error('Couldnt post customer.' + err);
        });
  }

 export const deleteCustomer = (id) => dispatch => {
 axios.delete(customersAPI + id)
 .then(res => {
   return dispatch ({
     type: DELETE_CUSTOMER,
     payload: res.data
   });
 })
 }
 
  export const fetchCustomers = () => dispatch => {

    axios.get(customersAPI, {
    })
      .then(res => { 
        return dispatch({
          type: FETCH_CUSTOMERS,
          payload: res.data
        });
      })
      .catch(err => {
        console.log(err);
        throw new Error('Could not fetch customers.' + err);
      });    
  }

  export const postOrder = (hazmana, amount, id) => dispatch => {
    axios.post('https://www.thecleanersisrael.com/api/customers/' +id, {
          hazmana, amount
      })
      .then(res => {
          return dispatch({
            type: POST_ORDER,
            payload: res.data,
          });       
        })
        .catch(err => {
          console.log(err);
          throw new Error('Couldnt post customer.' + err);
        });
  }