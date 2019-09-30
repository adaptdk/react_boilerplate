import { combineEpics } from 'redux-observable';

import { epics as fooEpics } from 'state/ducks/foo';

export default combineEpics(...Object.values(fooEpics));
