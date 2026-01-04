import { useState, createContext, useContext } from "react";

const CountContext = createContext();

function CountContextProvider({ children }) {
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  );
}
function Parent() {
  return (
    <CountContextProvider>
      <Incrase />
      <Decrease />
      <Value />
    </CountContextProvider>
  );
}

function Decrease() {
  // const { count, setCount } = useContext(CountContext);

  const { setCount } = useContext(CountContext);

  function decrease() {
    setCount((currCount) => currCount - 1);
  }

  return <button onClick={decrease}>Decrease</button>;
}

function Incrase() {
  const { setCount } = useContext(CountContext);

  return (
    <button onClick={() => setCount((count) => count + 1)}>Increase</button>
  );
}

function Value() {
  const { count } = useContext(CountContext);
  return <p>Count: {count}</p>;
}

const App = () => {
  return (
    <div>
      <Parent />
    </div>
  );
};
export default App;
