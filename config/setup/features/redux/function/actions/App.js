import { createAction } from 'redux-actions';

// Constant
import * as types from '../constants/App';

// Example Action
const updateTitle = createAction(types.APP_UPDATE_TITLE);
export const updateTitleAction = payload => dispatch => {
  return dispatch(updateTitle(payload));
};
