import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Importing Middlewares
import { middlewares } from 'middlewares/middlewares';
import rootReducer from '../reducers/Root';

// Configure The Store
const configureStore = (initialState = {}) => {
  const isProduction = process.env.NODE_ENV === 'production';
  const middleware = applyMiddleware(...middlewares);

  const persistConfig = {
    key: 'root',
    blacklist: ['app'],
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
