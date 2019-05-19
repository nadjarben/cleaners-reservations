import { combineReducers } from 'redux';
import reservationReducer from './reservationReducer';
import localeReducer from './localeReducer';

export default combineReducers({
  reservations: reservationReducer,
  locale: localeReducer
});