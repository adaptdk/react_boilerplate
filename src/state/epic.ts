import { combineEpics } from "redux-observable";

import * as fooEpics from "state/ducks/foo/epics";

export default combineEpics(...Object.values(fooEpics));
