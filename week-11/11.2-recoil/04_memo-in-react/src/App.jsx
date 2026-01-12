import { useState, useEffect, memo } from "react";

//memo lets you skip re-rendering a component when its props are unchanged.

// optimising with memo contex api   components  recoils
// when a component re-renders, all its children re-render as well.
//SO USE MEMO TO PREVENT UNNECESSARY RE-RENDERS in usestate hook

function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  // useEffect to set up an interval that increments the count every 3 seconds
  useEffect(() => {
    // Set up an interval to increment the count
    const interval = setInterval(() => {
      setCount((c) => c + 1); // Increment count by 1
    }, 3000);

    // Cleanup function to clear the interval on component unmount
    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures this runs only once after the initial render

  return (
    <div>
      <CurrentCount count={count} />
      <Increase />
      <Decrease />
    </div>
  );
}

// const MemoizedCurrentCount = memo(CurrentCount);

// Memoizing CurrentCount to prevent unnecessary re-renders
// unless props change or state changes that is pass to children conpment changes then children re-renders

//count  passed as props so it will re render when count / props changes
const CurrentCount = memo(function ({ count }) {
  return <div>{count}</div>;
});

const Increase = memo(function () {
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Increase</button>
    </div>
  );
});

const Decrease = memo(function () {
  return (
    <div>
      <button onClick={() => setCount((c) => c - 1)}>Decrease</button>
    </div>
  );
});

export default App; // Exporting the App component for use in other files
