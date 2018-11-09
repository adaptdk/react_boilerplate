import { combineReducers } from 'redux';
import types from './types';

const foo = (state = {
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

const fooReducer = combineReducers({
  foo,
});

export default fooReducer;
