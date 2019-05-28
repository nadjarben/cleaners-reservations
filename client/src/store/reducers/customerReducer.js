import { POST_CUSTOMER, FETCH_CUSTOMERS, DELETE_CUSTOMER } from '../actions/types';


const initialState = {
  customer: []
};

export default function(state = initialState, action) {
  switch (action.type) {
      case POST_CUSTOMER:
      return {
        ...state,
        postedCustomer: action.payload
      };
      case DELETE_CUSTOMER:
        return {
          ...state,
          customer: action.payload
        };
      case FETCH_CUSTOMERS:
        return {
          ...state,
          customer: action.payload
        }
      default:
      return state;
    }
}