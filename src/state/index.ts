import storage from 'redux-persist/lib/storage';
import { createStore, applyMiddleware, compose } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';

// State
import middlewares, { epicMiddleware } from 'state/middlewares';
import rootEpic from 'state/epic';
import rootReducer from 'state/reducer';
import { connectedHistory } from 'constants/state';

// Services
import { isDev } from 'utils/development';

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
const persistedReducer = persistReducer(persistConfig, rootReducer(connectedHistory));

// Creating the store
export const store = createStore(persistedReducer, initialState, enhancer);

// Create the Persisted Store
export const persistor = persistStore(store);

// Initialize the Epics
epicMiddleware.run(rootEpic);

// Export store singleton instance
export default store;
