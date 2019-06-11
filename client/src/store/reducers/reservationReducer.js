import { POST_RESERVATION, FETCH_RESERVATIONS, DELETE_RESERVATION, ARCHIVE_RESERVATION, 
  POST_LAST_RESERVATION, DELETE_LAST_RESERVATION } from '../actions/types';


const initialState = {
  reservation: []
};

export default function(state = initialState, action) {
  switch (action.type) {
      case POST_RESERVATION:
      return {
        ...state,
        postedReservation: action.payload
      };
      case DELETE_RESERVATION:
        return {
          ...state,
          reservation: action.payload
        };
      case FETCH_RESERVATIONS:
        return {
          ...state,
          reservation: action.payload
        }
        case ARCHIVE_RESERVATION:
          return {
            ...state,
            reservation: action.payload
          }
        case POST_LAST_RESERVATION:
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