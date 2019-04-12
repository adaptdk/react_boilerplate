import {
  createStore,
  applyMiddleware,
  compose,
  combineReducers,
} from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Importing Middlewares
import { middlewares } from 'utilities/middlewares/middlewares';
import * as reducers from './ducks/index'; // import all reducers from ducks/index.js

const rootReducer = combineReducers(reducers);

declare global {
  interface Window { __REDUX_DEVTOOLS_EXTENSION__: any; __INITIAL_STATE__: any; }
}

// Configure The Store
const configureStore = (initialState = {}) => {
  const isProduction = process.env.NODE_ENV === 'production';
  const middleware = applyMiddleware(...middlewares);

  const persistConfig = {
    key: 'root',
    whitelist: ['foo'],
    storage,
  };

  const persistedReducer = persistReducer(persistConfig, rootReducer);

  // If Production
  if (isProduction) {
    return createStore(
      persistedReducer,
      middleware
    );
  }

  // Enable DevTools if browser extension is installed
  let enhancer;
  if (window.__REDUX_DEVTOOLS_EXTENSION__) { // eslint-disable-line
    enhancer = compose(
      middleware,
      window.__REDUX_DEVTOOLS_EXTENSION__() // eslint-disable-line
    );
  } else {
    enhancer = compose(middleware);
  }

  return createStore(
    persistedReducer,
    initialState,
    enhancer
  );
};

const store = configureStore(window.__INITIAL_STATE__); // eslint-disable-line
const persistor = persistStore(store);

export { store, persistor };
