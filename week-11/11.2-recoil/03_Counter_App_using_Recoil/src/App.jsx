import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { counterAtom } from "./store/atoms/counter";

function App() {
  return (
    <RecoilRoot>
      <Counter />
    </RecoilRoot>
  );
}

function Counter() {
  return (
    <div>
      <CurrentCount />
      <Increase />
      <Decrease />
    </div>
  );
}

//rerenders when state changes
function CurrentCount() {
  const count = useRecoilValue(counterAtom);
  return <div>Count: {count}</div>;
}


//increase and decrease functions use useSetRecoilState to update the counterAtom state
//no rerender needed here 
function Increase() {
  const setCount = useSetRecoilState(counterAtom);
  return <button onClick={() => setCount((c) => c + 1)}>Increase</button>;
}

function Decrease() {
  const setCount = useSetRecoilState(counterAtom);
  return <button onClick={() => setCount((c) => c - 1)}>Decrease</button>;
}

export default App;
