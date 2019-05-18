import { POST_RESERVATION } from '../actions/types';


const initialState = {
  reservations: []
};

export default function(state = initialState, action) {
  switch (action.type) {
      case POST_RESERVATION:
      return {
        ...state,
        reservations: action.payload
      };
      default:
      return state;
    }
}