import React from "react";

const App = () => {
  return (
    <div>
      <MyComponent />
    </div>
  );
};

const componentStyle = {
  backgroundColor: "red",
  color: "white",
  borderRadius: 20,
};

function MyComponent() {
  return <div style={componentStyle}>Hello , world !</div>;
}

export default App;
