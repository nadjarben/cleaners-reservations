import { combineReducers } from 'redux';
import reservationReducer from './reservationReducer';
import customerReducer from './customerReducer';
import contactReducer from './contactReducer';
import notifReducer from './notifReducer';
import localeReducer from './localeReducer';
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";

export default combineReducers({
  locale: localeReducer,
  reservations: reservationReducer,
  customers: customerReducer,
  contacts: contactReducer,
  notif: notifReducer,
  auth: authReducer,
  errors: errorReducer
});