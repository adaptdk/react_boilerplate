// Each expors multiple functions
import * as actions from './actions';
import * as epics from './epics';
import * as models from './models';
import reducer from './reducer'; // Reducer only exports default function

// Making specifics imports available
export { reducer };
export { actions };
export { epics };
export { models };

// Export as default object
export default {
  actions,
  epics,
  models,
  reducer,
};
