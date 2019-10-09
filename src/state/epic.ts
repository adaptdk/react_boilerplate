import { combineEpics } from 'redux-observable';

// Epics
import foo from 'state/ducks/foo';

export default combineEpics(
  ...Object.values(foo.epics),
);
