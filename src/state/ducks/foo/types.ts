import { StateType, ActionType } from "typesafe-actions";

declare module "Foo" {
  export type Store = StateType<typeof import("./index").default>;
  export type RootAction = ActionType<typeof import("./action").default>;
  export type RootState = StateType<typeof import("./reducer").default>;
}

declare module "typesafe-actions" {
  interface Types {
    RootAction: ActionType<typeof import("./action").default>;
  }
}

// const CONSTANT = "foo/TYPE";

// export default {
//   CONSTANT,
// };
