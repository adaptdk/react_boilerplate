import { StateType, ActionType } from "typesafe-actions";

declare module "RootTypes" {
  export type Store = StateType<typeof import("./index").default>;
  export type RootAction = ActionType<typeof import("./actions").default>;
  export type RootState = StateType<typeof import("./reducer").default>;
}

declare module "typesafe-actions" {
  interface Types {
    RootAction: ActionType<typeof import("./actions").default>;
  }
}
