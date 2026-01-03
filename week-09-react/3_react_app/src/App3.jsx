import { useEffect, useState } from "react";
function App() {
  let [counterVisible, setcounterVisible] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setcounterVisible((c) => !c);
    }, 5000);
  }, []);

  return (
    <div>
      {/* {counterVisible ? <Counter></Counter> : null} */}
      {/* {counterVisible && <Counter></Counter>} */}
      
      hi
      <div style={{ visibility: counterVisible ? "hidden" : "visible" }}>
        <Counter></Counter>
      </div>
      hellow current
      {/* <b>hi there</b> */}
      {/* <Counter></Counter> */}
    </div>
  );
}

//mounting , re-render,unmounting  ----> life cycle events
function Counter() {
  const [count, setCount] = useState(0);

  // console.log("inside counter component");

  //hooking into lifecycle events of react.
  //dont run this on every render .run only in first render.
  //guard set interval from rerenders.
  useEffect(function () {
    console.log("on mount ");

    let clock = setInterval(function () {
      // setCount((count) => count + 1);
      console.log("inside set interval ");

      setCount(function (count) {
        return count + 1;
      });
    }, 1000);

    // console.log("mounted");

    return function () {
      console.log("on unmount");

      clearInterval(clock);
    };
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
