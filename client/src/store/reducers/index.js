import { combineReducers } from 'redux';
import reservationReducer from './reservationReducer';
import googleAuthReducer from './googleAuthReducer';
import localeReducer from './localeReducer';

export default combineReducers({
  auth: googleAuthReducer,
  reservations: reservationReducer,
  locale: localeReducer
});