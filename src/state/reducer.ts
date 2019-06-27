import { combineReducers } from "redux";

import fooReducer from "state/ducks/foo/reducer";

const rootReducer = combineReducers({
  foo: fooReducer,
});

export default rootReducer;
