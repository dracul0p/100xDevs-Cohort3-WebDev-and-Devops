import { useState } from "react"; // Importing useState hook from React
// Importing the CSS file for styling

// Main App component
function App() {
  return (
    <div>
      <Counter /> {/* Rendering the Counter component */}
    </div>
  );
}

function CurrentCount({ count }) {
  return <div>Count: {count}</div>;
}

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <CurrentCount count={count} />
      <Increase setCount={setCount} count={count} />
      <Decrease setCount={setCount} count={count} />
    </div>
  );
}

function Increase({ setCount, count }) {
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

function Decrease({ setCount, count }) {
  return (
    <div>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
}

export default App; // Exporting the App component for use in other files
