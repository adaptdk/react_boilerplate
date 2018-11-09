import types from './types';

export const fooAction = value => ({
  type: types.CONSTANT,
  payload: value,
});

export default {
  fooAction,
};
