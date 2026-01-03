import { useState, useRef } from "react";
//useRef lets you create a refrence to a value , such that when u  change the value , the components does not rerender

//2nd useCase of useRef
// Clock with Start and Stop Functionality
function App() {
  const [currentCount, setCurrentCount] = useState(1);

  //wrong approach
  // let timer = 0; 
  //bad approach dont do this

  // function startClock() {
  //   timer = setInterval(() => setCurrentCount((c) => c + 1), 1000);
  // }

  //  function stopClock() {
  //   clearInterval(timer);
  // }


  //worst approach : extra re-rendring 
  // const [timer, setTimer] = useState(0);
  // function startClock() {
  //   let value = setInterval(() => setCurrentCount((c) => c + 1), 1000);
  //   setTimer(value);
  // }

  // function stopClock() {
  //   clearInterval(timer);
  // }

  const timer = useRef();

  function startClock() {
    let value = setInterval(() => setCurrentCount((c) => c + 1), 1000);
    timer.current = value;
  }

  function stopClock() {
    clearInterval(timer.current);
  }



  return (
    <div>
      {currentCount}
      <br />
      <button onClick={startClock}>Start</button>
      <button onClick={stopClock}>Stop</button>
    </div>
  );
}

export default App;
