import { compose } from "redux";

import { isDev } from "utilities/development";

export const composeEnhancers = (isDev && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
