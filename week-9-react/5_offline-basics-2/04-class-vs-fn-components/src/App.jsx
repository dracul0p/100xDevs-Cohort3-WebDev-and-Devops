import React, { Component, useState } from "react";

class ClassCounter extends Component {
  state = { count: 0 };

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

const FunctionalCounter = () => {
  const [count, setCount] = useState(0);

  function increment() {
    setCount((count) => count + 1);
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

function App() {
  // Render the JSX that will be rendered in the browser
  return (
    // Create a div element with JSX
    <div>
      {/* Render the ClassCounter component  */}
      <ClassCounter />

      {/* Render the ClassCounter component  */}
      <FunctionalCounter />
    </div>
  );
}

export default App;
