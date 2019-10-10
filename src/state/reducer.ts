import { combineReducers } from 'redux';
import { connectRouter, RouterState } from 'connected-react-router';

import foo, { models as fooModels } from 'state/ducks/foo';

export type AppState = {
  foo: fooModels.State;
  router: RouterState;
};

const rootReducer = (history) =>
  combineReducers({
    foo: foo.reducer,
    router: connectRouter(history),
  });

export default rootReducer;
