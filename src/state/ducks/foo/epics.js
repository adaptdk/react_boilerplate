// import { Epic } from "redux-observable";
import { tap, ignoreElements, filter } from "rxjs/operators";

// Utlities
import { ofType } from "utilities/store";

import * as constants from "./constants";

export const logActions = (action$, state$, { logger }) =>
  action$.pipe(
    // Filter the actions, so we're only hitting the specific type
    filter(ofType(constants.ADD_ELEMENT)),
    tap(action =>
      logger.log(`action type must be equal: ${constants.ADD_ELEMENT} === ${action.type}`)
    ),
    ignoreElements()
  );
