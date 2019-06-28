// Each expors multiple functions
import * as actions from "./actions";
import * as epics from "./epics";
import * as types from "./models";

// Reducer only exports default function
import reducer from "./reducer";

// Making specifics imports available
export { actions };
export { epics };
export { types };

// Export as default object
export default { actions, epics, types, reducer };
