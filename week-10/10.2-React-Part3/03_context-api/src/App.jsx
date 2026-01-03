import { useState, createContext } from "react";

const bulbContext = createContext();

function App() {
  const [bulbOn, setBulbOn] = useState(true);

  return (
    <div>
      <Light />
    </div>
  );
}

function Light() {
  return (
    <div>
      <LightBulb />
      <LightSwitch />
    </div>
  );
}

function LightBulb() {
  const bulbOn = getContext(bulbContext);

  return <div>{bulbOn ? "Bulb is on" : "Bulb is off"}</div>;
}

function LightSwitch() {
  return (
    <div>
      <button onClick={toggleBulb}>Toggle the Bulb</button>
    </div>
  );
}

export default App;
