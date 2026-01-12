import { atom, selector } from "recoil";
export const counterAtom = atom({
  key: "counter",
  default: 0,
});

//selector :derived state
//evenSelector : depends on counterAtom
export const evenSelector = selector({
  key: "isEvenSelector",
  get: function ({ get }) {
    const currentCount = get(counterAtom);
    const isEven = currentCount % 2 === 0;
    return isEven;
  },
});
