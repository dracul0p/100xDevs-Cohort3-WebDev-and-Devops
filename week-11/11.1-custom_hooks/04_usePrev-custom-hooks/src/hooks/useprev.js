import { useEffect, useRef } from "react";

export const usePrev = (value) => {
  // 1step
  // on 1st render : ref.current = undefined
  const ref = useRef();

  console.log("re-render happened with new value" + value);

  // 3rd step
  useEffect(() => {
    console.log("updated the ref to be " + value);

    ref.current = value; // 0 1
  }, [value]);

  // 2nd step
  console.log("returned" + ref.current);

  return ref.current; //undefined  0
};

//return first effect gets called later , so initialy it will be undefined
