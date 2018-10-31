import { combineReducers } from 'redux';
import AppReducer from './App';

const rootReducer = combineReducers({
  app: AppReducer,
});

export default rootReducer;