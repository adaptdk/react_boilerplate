import { combineReducers } from "redux";

import foo from "state/ducks/foo";

const rootReducer = combineReducers({
  foo: foo.reducer,
});

export default rootReducer;
