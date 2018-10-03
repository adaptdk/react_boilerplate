// @flow
import { createAction } from 'redux-actions';
import * as types from 'constants/App';

export const appInitial = createAction(types.APP_INITIAL);

// Example
export const AppModalState = createAction(types.APP_MODAL_STATE);
export const setAppModalState = (payload) => (dispatch) => (
  dispatch(AppModalState(payload))
);
