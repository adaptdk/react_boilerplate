import { combineReducers } from "redux";
import { ActionType } from "typesafe-actions";

import * as actions from "./actions";
import { Foo } from "./models";
import { ADD } from "./constants";

export type FooAction = ActionType<typeof actions>;

export interface FooState {
  readonly foo: Foo[];
}

// The initial state
const initialState: FooState = {
  foo: [],
};

// Create a combined reducer and export it
export default combineReducers<FooState, FooAction>({
  foo: (state = initialState.foo, action) => {
    switch (action.type) {
    case ADD:
      return [...state, action.payload];

    default:
      return state;
    }
  },
});
