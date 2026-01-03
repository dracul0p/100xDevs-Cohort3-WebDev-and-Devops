import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* <b>hi there</b> */}

      <Counter></Counter>
      {/* <Counter></Counter> */}
    </div>
  );
}

//mounting , re-render,unmounting  ----> life cycle events
function Counter() {
  const [count, setCount] = useState(0);

  console.log("inside counter component");

  //hooking into lifecycle events of react.
  //dont run this on every render .run only in first render.
  //guard set interval from rerenders.
  useEffect(function () {
    setInterval(function () {
      // setCount((count) => count + 1);
      setCount(function (count) {
        return count + 1;
      });
    }, 1000);
    console.log("mounted");
  }, []); // dependancy array , clean up , fetch inside use effect

  // function increaseCount() {
  //   setCount(count + 1);
  // }

  return (
    <div>
      <h1>Clock</h1>
      <h1 id="text">{count}</h1>
      {/* <button onClick={increaseCount}>Increase count</button> */}
    </div>
  );
}

export default App;
