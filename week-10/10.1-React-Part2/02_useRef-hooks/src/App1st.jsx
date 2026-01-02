import { useState, useRef } from "react";
//useRef lets you create a refrence to a value , such that when u  change the value , the components does not rerender
function App() {
  const inputRef = useRef();

  //3 ways to define variables in react
  let value = 1;
  let [value1, setValue] = useState(true);
  const valueRef = useRef();


// 1st use case of userRef
  function focusOnInput() {
    // document.getElementById("name").focus();
    //avoide this in dom manipulation in react
    //do this by using useRef

    inputRef.current.focus();
  }
  return (
    <div>
      Sign up
      <input ref={inputRef} id="name" type="text" />
      <input type="text" />
      <button onClick={focusOnInput}>Submit</button>
    </div>
  );
}




export default App;
