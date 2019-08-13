import { POST_USER, FETCH_USERS, DELETE_USER } from '../actions/types';


const initialState = {
  user: []
};

export default function(state = initialState, action) {
  switch (action.type) {
      case POST_USER:
      return {
        ...state,
        postedUser: action.payload
      };
      case DELETE_USER:
        return {
          ...state,
          user: action.payload
        };
      case FETCH_USERS:
        return {
          ...state,
          user: action.payload
        }
      default:
      return state;
    }
}