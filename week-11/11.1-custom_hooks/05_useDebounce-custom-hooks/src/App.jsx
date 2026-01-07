import { useState, useEffect, useRef } from "react";

import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

// import { usePrev } from "./hooks/useDebounce.js";

//custom hooks : start with "use" keyword |  can use other hooks inside it.

//create useDebounce hook

const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return debouncedValue;
};





function App() {
  const [inputValue, setInputValue] = useState("");
  const debouncedValue  = useDebounce(inputValue , 200);

  function change(e){
    setInputValue(e.target.value);
  }

  useEffect(() =>{
   //expensive operation :fetch
   console.log("expensive operation");
   
  } ,[debouncedValue] );


  return (
    <>
      <input type="text" onChange={change} />
    </>
  );
}




// function useDebounce(sendDatatoBackend) {
//   const currentClock = useRef(); //this variable is going to change a lot we dont need components to render on its change so useRef is used.

//   const fn = () => {
//     clearTimeout(currentClock.current);
//     currentClock.current = setTimeout(sendDatatoBackend, 300);
//   };

//   return fn;
// }

// function App() {
//   function sendDatatoBackend() {
//     fetch("api.amazon.com/search/");
//   }

//   //create useDebounce hook cALL AND CREATE A FN debouncedFn
//   const debouncedFn = useDebounce(sendDatatoBackend);

//   return (
//     <>
//       <input type="text" onChange={debouncedFn} />
//     </>
//   );
// }

export default App;
