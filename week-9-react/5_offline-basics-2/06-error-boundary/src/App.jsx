import React, { useState } from "react";

// Error boundaries are React components that catch JavaScript errors in their child component tree and display a fallback UI.

// Error boundaries only exist in class based components

//problem -------------------->
// error only in card1 componet why complete website chrash just contain the error

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <ErrorBoundary>
          <Card1 />
        </ErrorBoundary>

        <Card2 />
      </div>
    </>
  );
}

function Card1() {
  throw new Error("error while rendring");

  return (
    <div style={{ background: "red", borderRadius: 20, padding: 20 }}>
      hi there
    </div>
  );
}

function Card2() {
  return (
    <div style={{ background: "yellow", borderRadius: 20, padding: 20 }}>
      hi there
    </div>
  );
}

//use it as a black box most companies does this : fall back ui in error occurance
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Error caught:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <h1 style={{ background: "red", borderRadius: 20, padding: 20 }}>
          Something went wrong.
        </h1>
      );
    }

    return this.props.children;
  }
}

export default App;
