import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Importing Middlewares
import { middlewares } from 'utilities/middlewares/middlewares';
import * as reducers from './ducks/index'; // import all reducers from ducks/index.js

const rootReducer = combineReducers(reducers);

// Configure The Store
const configureStore = (initialState = {}) => {
  const isProduction = process.env.NODE_ENV === 'production';
  const middleware = applyMiddleware(...middlewares);

  const persistConfig = {
    key: 'root',
    blacklist: ['*'],
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

  // If Not Production
  // Enable DevTools if browser extension is installed
  let enhancer;
  if (window.__REDUX_DEVTOOLS_EXTENSION__) {
    enhancer = compose(
      middleware,
      window.__REDUX_DEVTOOLS_EXTENSION__()
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

const store = configureStore(window.__INITIAL_STATE__);
const persistor = persistStore(store);

export { store, persistor };
