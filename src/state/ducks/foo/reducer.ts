import { combineReducers } from "redux";
import { ActionType } from "typesafe-actions";
import { persistReducer } from "redux-persist";

// State
import * as actions from "./actions";
import * as models from "./models";
import * as constants from "./constants";

// Actions type
export type FooAction = ActionType<typeof actions>;

// State type
export interface FooState {
  readonly elements: models.Element[];
  readonly title: string;
}

// The initial state
const initialState: FooState = {
  elements: [],
  title: "",
};

// Create a combined reducer and export it
export default persistReducer(
  constants.persistConfig,
  combineReducers<FooState, FooAction>({
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
