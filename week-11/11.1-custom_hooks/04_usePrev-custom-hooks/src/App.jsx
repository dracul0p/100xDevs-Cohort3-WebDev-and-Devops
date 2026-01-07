import { useState, useEffect } from "react";

import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import { useFetch } from "./hooks/useFetch.js";

import { usePrev } from "./hooks/usePrev.js";

//ciustom hooks : start with "use" keyword |  can use other hooks inside it.

function App() {
  const [state, setState] = useState(0);

  const prev = usePrev(state); // 0 1

  return (
    <>
      <p>{state}</p>
      <button
        onClick={() => {
          setState((curr) => curr + 1);
        }}
      >
        Click Me
      </button>

      <p>The previous value was {prev}</p>
    </>
  );
}

export default App;
