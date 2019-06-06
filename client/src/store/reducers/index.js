import { combineReducers } from 'redux';
import reservationReducer from './reservationReducer';
import customerReducer from './customerReducer';
import contactReducer from './contactReducer';
import googleAuthReducer from './googleAuthReducer';
import localeReducer from './localeReducer';

export default combineReducers({
  auth: googleAuthReducer,
  locale: localeReducer,
  reservations: reservationReducer,
  customers: customerReducer,
  contacts: contactReducer
});