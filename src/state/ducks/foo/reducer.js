import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";

// State
import * as constants from "./constants";

// The initial state
const initialState = {
  elements: [],
  title: "",
};

// Create a combined reducer and export it
export default persistReducer(
  constants.persistConfig,
  combineReducers({
    title: (state = initialState.title, action) => {
      switch (action.type) {
        case constants.UPDATE_TITLE:
          return action.payload;
        default:
          return state;
      }
    },
    elements: (state = initialState.elements, action) => {
      switch (action.type) {
        case constants.ADD_ELEMENT:
          return [...state, action.payload];
        case constants.DELETE_LAST:
          if (state.length < 1) return state;
          return state.slice(0, -1);
        default:
          return state;
      }
    },
  })
);
