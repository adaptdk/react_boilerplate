// @flow
import { handleActions } from 'redux-actions';
import * as types from 'constants/App';

const initialState = {
  isModalActive: false,
};

const appHandler = (state, action) => {
  switch (action.type) {
    case types.APP_MODAL_STATE:
      return {
        ...state,
      };
    default:
      return {};
  }
};

const App = handleActions({
  [types.APP_MODAL_STATE]: (state, action) => ({
    ...state,
    ...appHandler(state, action),
  }),
}, initialState);

export default App;
