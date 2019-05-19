import { POST_RESERVATION, FETCH_RESERVATIONS } from '../actions/types';


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
      case FETCH_RESERVATIONS:
        return {
          ...state,
          reservation: action.payload
        }
      default:
      return state;
    }
}