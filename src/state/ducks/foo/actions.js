import cuid from "cuid";

// State
import * as constants from "./constants";

/** Update the title */
export const updateTitle = title => ({
  type: constants.UPDATE_TITLE,
  payload: title,
});

/** Add a new element to the element list */
export const addElement = title => ({
  type: constants.ADD_ELEMENT,
  payload: {
    title,
    id: cuid(),
    completed: false,
  },
});

/** Delete the last element from the element list */
export const deleteElement = () => ({ type: constants.DELETE_LAST });
