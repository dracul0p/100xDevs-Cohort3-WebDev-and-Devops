// The Context API is a powerful feature in React that enables you to manage state across your application more effectively, especially when dealing with deeply nested components.

// context API helps to avoid "prop drilling"


// import { useState, createContext, useContext } from "react";

// step1 : create context
const bulbContext = createContext();

function App() {
  const [bulbOn, setBulbOn] = useState(true);

  return (
    <div>
      {/* step 2: provide context value that childrens should have  */}

      <bulbContext.Provider
        value={{
          bulbOn: bulbOn,
          setBulbOn: setBulbOn,
        }}
      >
        <Light />
      </bulbContext.Provider>
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
  // step 3: consume context value
  const { bulbOn } = useContext(bulbContext);

  return <div>{bulbOn ? "Bulb is on" : "Bulb is off"}</div>;
}

function LightSwitch() {
  const { bulbOn, setBulbOn } = useContext(bulbContext);

  function toggleBulb() {
    setBulbOn(!bulbOn);
  }

  return (
    <div>
      <button onClick={toggleBulb}>Toggle the Bulb</button>
    </div>
  );
}

export default App;
