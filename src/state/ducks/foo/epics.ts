import { RootAction, RootState, Services } from "RootTypes";
import { Epic } from "redux-observable";
import { tap, ignoreElements, filter, delay } from "rxjs/operators";
import { isOfType } from "typesafe-actions";

import * as constants from "./constants";

export const logAddAction: Epic<RootAction, RootAction, RootState, Services> = (action$, state$, { logger }) =>
  action$.pipe(
    filter(isOfType(constants.ADD)), // action is narrowed to: { type: "ADD_TODO"; payload: string; }
    delay(1000),
    tap(action => {
      logger.log(`action type must be equal: ${constants.ADD} === ${action.type}`);
    }),
    ignoreElements()
  );
