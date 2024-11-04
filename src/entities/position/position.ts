import { createStore } from "effector";
import { positionFx } from "./effect";

export const positionStore = createStore<any | null>(null).on(
  positionFx.doneData,
  (_, position) => position
);
