import { createStore, applyMiddleware } from "redux";
import { createEpicMiddleware } from "redux-observable";
import { persistReducer, persistStore } from "redux-persist";

// Utils
import { composeEnhancers, persistConfig } from "utilities/store";

// State
import rootReducer from "state/reducer";
import rootEpic from "state/epic";

// Services
import services from "services";

export const epicMiddleware = createEpicMiddleware({
  dependencies: services,
});

// Setup middlewares
const middlewares = [epicMiddleware];

// Compose Enhancers
const enhancer = composeEnhancers(applyMiddleware(...middlewares));

// Rehydrate state on app start
const initialState = {};

// Create the Persisted Reducer, for storing states in localStorage
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Creating the store
export const store = createStore(persistedReducer, initialState, enhancer);

// Create the Persisted Store
export const persistor = persistStore(store);

// Initialize the Epics
epicMiddleware.run(rootEpic);

// Export store singleton instance
export default store;
