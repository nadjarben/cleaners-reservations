import { POST_CONTACT, FETCH_CONTACTS, DELETE_CONTACT } from '../actions/types';


const initialState = {
  contact: []
};

export default function(state = initialState, action) {
  switch (action.type) {
      case POST_CONTACT:
      return {
        ...state,
        postedContact: action.payload
      };
      case DELETE_CONTACT:
        return {
          ...state,
          contact: action.payload
        };
      case FETCH_CONTACTS:
        return {
          ...state,
          contact: action.payload
        }
      default:
      return state;
    }
}