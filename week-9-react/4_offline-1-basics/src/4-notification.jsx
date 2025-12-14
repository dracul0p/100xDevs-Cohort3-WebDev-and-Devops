// what  react do ?
//structure your app into components
// defining a state of your application

// component  : building block of ui ,
// allow ui tos split into independent reusable piece
import { useEffect, useState } from "react";
import { PostComponet } from "./5-post";

function App() {
  const [count, setCount] = useState(0);

  function incCount() {
    setCount(count + 1);
  }

  return (
    <div>
      <div style={{ display: "flex" }}>
        <div
          style={{
            background: "red",
            borderRadius: 50,
            width: 20,
            height: 25,
            paddingLeft: 10,
            paddingTop: 5,
          }}
        >
          {count}
        </div>
      </div>
      <img
        style={{ cursor: "pointer" }}
        src="https://cdn-icons-png.flaticon.com/512/472/472371.png"
        alt=""
        width="40"
      />
      <button onClick={incCount}>count</button>
    </div>
  );
}
export default App;
