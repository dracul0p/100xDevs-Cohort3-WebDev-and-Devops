import { atom } from "recoil";
export const counterAtom = atom({
  key: "counter",
  default: 0,
});

// key: A unique identifier for this atom.
