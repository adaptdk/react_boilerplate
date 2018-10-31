import types from './types';

export const duckAction = value => ({
  type: types.CONSTANT,
  payload: value
});

export default {
  duckAction,
};
