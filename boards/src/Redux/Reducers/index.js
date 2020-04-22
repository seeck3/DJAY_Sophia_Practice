import { combineReducers } from 'redux';
import board from './board';
import auth from './auth';

export default combineReducers({
  board,
  auth,
});
