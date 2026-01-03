import { useState } from "react";

import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
function App() {
  const [todos, setTodo] = useState([
    {
      title: "Go to gym",
      description: "Hit the gym regularly",
      done: true,
    },
  ]);

  function addTodo() {
     // alert("hi");
     
    let newArray = [
      ...todos,
      {
        title: document.getElementById("title").value,
        description: document.getElementById("description").value,
        done: true,
      },

    ];

   
  
    // for (let i = 0; i < todos.length; i++) {
    //   newArray.push(todos[i]);
    // }

    // newArray.push({
    //   title: document.getElementById("title").value,
    //   description: document.getElementById("description").value,
    //   done: true,
    // });

    setTodo(newArray);
  }

  return (
    <div>
      <input id="title" type="text" placeholder="Title" />

      <input id="description" type="text" placeholder="Description" />

      <button onClick={addTodo}>Add todo</button>
      {/* {JSON.stringify(todos)}  */}

      {todos.map((todo) => (
        <Todo
          title={todo.title}
          description={todo.description}
          done={todo.done}
        />
      ))}
    </div>
  );
}

function Todo(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
      <h2>{props.done ? "todo task done" : "todo task not done"}</h2>
    </div>
  );
}

export default App;
