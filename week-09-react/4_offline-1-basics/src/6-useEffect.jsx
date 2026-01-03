import { useEffect, useState } from "react";
// import { PostComponet } from "./5-post";

// function App() {
//   // Create a state variable named count and a function to update it named setCount
//   const [count, setCount] = useState(1);

//   function increaseCount() {
//     // setCount((count) => count + 1);

//     setCount(function (currentValue) {
//       console.log("incCount " + currentValue);
//       return currentValue + 1;
//     });
//   }

//   useEffect(function () {
//     console.log("above set interval");
//     setInterval(increaseCount, 1000);
//   }, []);

//   return <div>{count}</div>;
// }

function App() {
  // Create a state variable named count and a function to update it named setCount
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  function increaseCount() {
    // setCount((count) => count + 1);

    setCount(function (currentValue) {
      console.log("incCount " + currentValue);
      return currentValue + 1;
    });
  }
  function decreaseCount() {
    // setCount((count) => count + 1);

    setCount2(function (currentValue) {
      console.log("decreaseCount " + currentValue);
      return currentValue - 1;
    });
  }

  useEffect(function () {
    console.log("above set interval");
    setInterval(increaseCount, 1000);
    setInterval(decreaseCount, 1000);
  }, []); // this will run on mount , because the array is empty

  //useEffect will triger side effect any time state change that is provided dependancy array
  useEffect(() => {
    console.log("the count has benn udated to " + count );
    fetch();
  }, [count]); // run any times count changes  and for first time on mount

  return (
    <div>
      {count} {count2}
    </div>
  );
}

export default App;
