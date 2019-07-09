// Each expors multiple functions
import * as actions from "./actions";
import * as epics from "./epics";

// Reducer only exports default function
import reducer from "./reducer";

// Making specifics imports available
export { actions };
export { epics };

// Export as default object
export default { actions, epics, reducer };
