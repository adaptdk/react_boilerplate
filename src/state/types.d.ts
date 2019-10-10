import { StateType, ActionType } from 'typesafe-actions';

declare module 'RootTypes' {
  export type Store = StateType<typeof import('./index').default>;
  export type RootAction = ActionType<typeof import('./actions').default>;
  export type RootState = StateType<typeof import('./reducer').AppState>;
}

declare module 'typesafe-actions' {
  type Types = {
    RootAction: ActionType<typeof import('./actions').default>;
  };
}
