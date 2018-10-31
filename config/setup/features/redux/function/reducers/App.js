// Constants
import * as types from 'constants/App';

// Initial state
const initialState = { key: 'value' };

// App Reducer
const app = (state = { ...initialState }, action) => {
  const { payload } = action;
  switch (action.type) {
    case types.APP_UPDATE_TITLE:
      return {
        ...state,
        title: payload,
        // Your reducer
      };
    default:
      return state;
  }
};

export default app;
