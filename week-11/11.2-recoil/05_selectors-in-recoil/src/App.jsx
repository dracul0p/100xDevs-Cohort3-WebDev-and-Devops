import { counterAtom, evenSelector } from "./store/atoms/counter";
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";

// # Selector

// A **selector** represents a piece of **derived state**. You can think of derived state as the output of passing state to a pure function that derives a new value from the said state.

// Derived state is a powerful concept because it lets us build dynamic data that depends on other data

function App() {
  return (
    <RecoilRoot>
      {/* Rendering the Buttons, Counter, and IsEven components */}
      <Buttons />
      <Counter />
      <IsEven />
    </RecoilRoot>
  );
}

function Buttons() {
  const setCount = useSetRecoilState(counterAtom);
  function increase() {
    setCount((c) => c + 2);
  }

  function decrease() {
    setCount((c) => c - 1);
  }

  return (
    <div>
      <button onClick={increase}>Increase</button>

      <button onClick={decrease}>Decrease</button>
    </div>
  );
}

//suscribed to atom
function Counter() {
  const count = useRecoilValue(counterAtom);
  return (
    <div>
      <h2>Count: {count}</h2>
    </div>
  );
}

//suscribed to selector / derived state
function IsEven() {
  const isEven = useRecoilValue(evenSelector);

  return (
    <div>
      <h3>Is Even: {isEven ? "Yes" : "No"}</h3>
    </div>
  );
}

export default App;
