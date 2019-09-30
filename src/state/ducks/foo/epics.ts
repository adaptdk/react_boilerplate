import { RootAction, RootState, Services } from 'RootTypes';
import { Epic } from 'redux-observable';
import { tap, ignoreElements, filter } from 'rxjs/operators';
import { isOfType } from 'typesafe-actions';

import * as constants from './constants';

export const logActions: Epic<RootAction, RootAction, RootState, Services> = (
  action$,
  state$,
  { logger },
) =>
  action$.pipe(
    // Filter the actions, so we're only hitting the specific type
    filter(isOfType(constants.ADD_ELEMENT)),
    tap((action) =>
      logger.log(`action type must be equal: ${constants.ADD_ELEMENT} === ${action.type}`)),
    ignoreElements(),
  );
