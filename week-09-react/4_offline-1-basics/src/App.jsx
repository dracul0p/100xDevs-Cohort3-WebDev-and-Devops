import { useEffect, useState } from "react";

function App() {
  const [showTimer, setShowTimer] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setShowTimer((showTimer) => !showTimer);
    }, 5000);
  }, []);
  return <div>{showTimer && <Timer />}</div>;
}

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    console.log("Mounted");
    let clock = setInterval(() => {
      // console.log("clock running");

      setSeconds((prev) => prev + 1);
    }, 1000);

    return function () {
      clearInterval(clock);
    };
  }, []);

  return <h3>{seconds} seconds elapsed</h3>;
}

export default App;
