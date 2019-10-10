import { RootAction, RootState, Services } from 'RootTypes';
import { Epic } from 'redux-observable';
import { tap, ignoreElements, filter } from 'rxjs/operators';
import { isOfType } from 'typesafe-actions';

import * as consts from './constants';

export const logActions: Epic<RootAction, RootAction, RootState, Services> = (
  action$,
  state,
  { logger },
) =>
  action$.pipe(
    filter(isOfType(consts.ADD_ELEMENT)),
    tap((action) => {
      logger.log(`Do some fancy tracking here: ${action.type}`);
    }),
    ignoreElements(),
  );
