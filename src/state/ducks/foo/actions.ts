import cuid from "cuid";
import { action } from "typesafe-actions";

import { Foo } from "./models";
import { ADD } from "./constants";

export const add = (title: string): { type: any; payload: Foo } =>
  action(ADD, {
    title,
    id: cuid(),
    completed: false,
  });
