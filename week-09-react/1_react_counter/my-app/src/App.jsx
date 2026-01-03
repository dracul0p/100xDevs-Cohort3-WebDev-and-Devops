import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  //hook  => any fn in react starting with use.
  const [count, setCount] = useState(0);

  function onClickHandler() {
    setCount(count + 1);
  }

  return <div>
    <Button onClickHandler={onClickHandler} count={count} />
  </div>;
}

function Button(props) {
  return <button onClick={props.onClickHandler}>Counter {props.count}</button>;
}

export default App;
