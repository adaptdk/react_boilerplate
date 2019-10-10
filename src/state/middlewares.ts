import promise from 'redux-promise';
import services from 'services';
import thunk from 'redux-thunk';
import { RootAction, RootState, Services } from 'RootTypes';
import { connectedHistory } from 'constants/state';
import { createEpicMiddleware } from 'redux-observable';
import { routerMiddleware } from 'connected-react-router';

export const epicMiddleware = createEpicMiddleware<RootAction, RootAction, RootState, Services>({
  dependencies: services,
});

export default [thunk, promise, epicMiddleware, routerMiddleware(connectedHistory)];
