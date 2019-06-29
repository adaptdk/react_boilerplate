import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

// Actions
export const ADD_ELEMENT = "foo/ADD_ELEMENT";
export const DELETE_LAST = "foo/DELETE_LAST";
export const UPDATE_TITLE = "foo/UPDATE_TITLE";

// Redux Persistor Config
// The whitelisted elements, will be persisted on refresh
export const persistConfig = {
  key: "foo",
  whitelist: ["elements"],
  storage,
};
