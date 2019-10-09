import { createStore, applyMiddleware, compose } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// State
import rootReducer from 'state/reducer';
import rootEpic from 'state/epic';
// Services
import { isDev } from 'utils/development';
import middlewares, { epicMiddleware } from 'state/middlewares';

// Constants
export const composeEnhancers =
  (isDev && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

// Redux Persist Settings
export const persistConfig = {
  key: 'root',
  whitelist: [''],
  storage,
};

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
