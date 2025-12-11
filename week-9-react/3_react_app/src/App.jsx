import { useEffect, useState } from "react";

//useEffect , dependency array , cleanup
function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  function increaseCount() {
    setCount((cnt) => cnt + 1);
  }

  function decreaseCount() {
    setCount2((count) => count - 1);
  }

  return (
    <div>
      <Counter count={count} count2={count2} />
      after ======<button onClick={increaseCount}>increase count</button>
      <button onClick={decreaseCount}>decrease count</button>
    </div>
  );
}

//mounting , re-render,unmounting  ----> life cycle events
function Counter(props) {
  useEffect(function () {
    console.log("mount");

    return function () {
      console.log("unmount");
    };
  }, []);

  useEffect(
    function () {
      console.log("count has changed");

      return function () {
        console.log("clean up inside second effect");
      };
    },
    [props.count]
  );

  return (
    <div>
      Counter1 = {props.count} ! Counter2 = {props.count2} !
    </div>
  );
}

export default App;
