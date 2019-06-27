import { RootAction, RootState, Services } from "RootTypes";
import { createStore, applyMiddleware } from "redux";
import { createEpicMiddleware } from "redux-observable";

import { composeEnhancers } from "utilities/store";
import services from "services";
import rootReducer from "state/reducer";
import rootEpic from "state/epic";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__: any;
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
    __INITIAL_STATE__: any;
  }
}

export const epicMiddleware = createEpicMiddleware<RootAction, RootAction, RootState, Services>({
  dependencies: services,
});

// configure middlewares
const middlewares = [epicMiddleware];

// compose enhancers
const enhancer = composeEnhancers(applyMiddleware(...middlewares));

// rehydrate state on app start
const initialState = {};

// create store
export const store = createStore(rootReducer, initialState, enhancer);

epicMiddleware.run(rootEpic);

// export store singleton instance
export default store;
