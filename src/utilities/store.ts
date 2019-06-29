import { compose } from "redux";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import { isDev } from "utilities/development";

export const composeEnhancers =
  (isDev && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

// Redux Persist Settings
export const persistConfig = {
  key: "root",
  whitelist: [""],
  storage,
};
