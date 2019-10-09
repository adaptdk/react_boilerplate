import { RootAction, RootState, Services } from 'RootTypes';
import { Epic } from 'redux-observable';
import { tap, ignoreElements, filter } from 'rxjs/operators';
import { isOfType } from 'typesafe-actions';

import * as consts from './constants';

export const logActions: Epic<RootAction, RootAction, RootState, Services> = (
  action$,
  state$,
  { logger },
) =>
  action$.pipe(
    // Filter the actions, so we're only hitting the specific type
    filter(isOfType(consts.ADD_ELEMENT)),
    tap((action) =>
      logger.log(`action type must be equal: ${consts.ADD_ELEMENT} === ${action.type}`)),
    ignoreElements(),
  );
