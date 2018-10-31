import { combineReducers } from 'redux';
import types from './types';

const duck = (state = {
  isActive: false,
}, action) => {
  const { payload } = action;
  switch (action.type) {
    case types.CONSTANT:
      return {
        ...state,
        value: payload,
      };
    default:
      return state;
  }
};

const duckReducer = combineReducers({
  duck,
});

export default duckReducer;
