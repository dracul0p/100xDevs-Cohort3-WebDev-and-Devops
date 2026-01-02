import { useState, useRef } from "react";
//useRef lets you create a refrence to a value , such that when u  change the value , the components does not rerender

//2nd useCase of useRef
// Clock with Start and Stop Functionality
function App() {
  const [currentCount, setCurrentCount] = useState(1);

  const [timer , setTimer] = useState(0);

  // let timer = 0;
  //bad approach dont do this

  // function startClock() {
  //   timer = setInterval(() => setCurrentCount((c) => c + 1), 1000);
  //   setTimer(value);
  // }

    function startClock() {
    let value = setInterval(() => setCurrentCount((c) => c + 1), 1000);
    setTimer(value);
  }

  function stopClock() { 
    clearInterval(timer);
  }

  return (
    <div>
      {currentCount}
      <br />
      <button onClick={startClock}>Start</button>
      <button>Stop</button>
    </div>
  );
}

export default App;
