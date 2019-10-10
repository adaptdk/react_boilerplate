import cuid from 'cuid';
import { action } from 'typesafe-actions';

// State
import * as models from './models';
import * as consts from './constants';

/** Update the title */
export const updateTitle = (title: string) => action(consts.UPDATE_TITLE, title);

/** Add a new element to the element list */
export const addElement = (title: string) =>
  action(consts.ADD_ELEMENT, {
    title,
    id: cuid(),
    completed: false,
  } as models.Element);

/** Delete the last element from the element list */
export const deleteElement = () => action(consts.DELETE_LAST);
