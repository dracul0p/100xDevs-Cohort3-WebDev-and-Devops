import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

//custom hooks
// repeated logics are incapsulated inside custom hooks:

//ciustom hooks : start with "use" keyword |  can use other hooks inside it.

function userCounter() {
  const [count, setCount] = useState(0);

  function increaseCount() {
    // setCount(cout + 1 );
    setCount((count) => count + 1);
  }
  return { count, increaseCount };
}

function App() {
  return (
    <>
      <Counter />
      <Counter />
      <Counter />
    </>
  );
}

function Counter() {
  const { count, increaseCount } = userCounter();

  return (
    <div>
      <button onClick={increaseCount}>Count: {count}</button>
    </div>
  );
}

export default App;
