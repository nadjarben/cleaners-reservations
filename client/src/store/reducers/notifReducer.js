import { POST_LAST_RESERVATION, DELETE_LAST_RESERVATION, FETCH_LAST_RESERVATIONS } from '../actions/types';
  
  
  const initialState = {
    lastReservation: []
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
          case POST_LAST_RESERVATION:
            return {
              ...state,
              lastReservation: action.payload
            }
            case FETCH_LAST_RESERVATIONS:
            return {
              ...state,
              lastReservation: action.payload
            }
          case DELETE_LAST_RESERVATION:
              return {
                ...state,
                lastReservation: action.payload
                };
        default:
        return state;
      }
  }