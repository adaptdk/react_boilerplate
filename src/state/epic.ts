import { combineEpics } from "redux-observable";

import foo from "state/ducks/foo";

export default combineEpics(...Object.values(foo.epics));
