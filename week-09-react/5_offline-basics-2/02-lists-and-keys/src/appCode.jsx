function App() {
  const todos = [
    {
      title: "Go to gym",
      done: false,
    },
    {
      title: "Eat food",
      done: true,
    },
  ];

  const todosComponents = todos.map((todo) => {
    return <Todo title={todo.title} done={todo.done} />;
  });

  return (
    <div>
      {/* {todosComponents} */}
      {/* or */}

      {/* when using react while rendring a list you need to pass key as attribute to unikely identify paticular list  */}

      {/* What is key in React?

key is a special prop you add to list items.

React uses it to identify which items have changed, added, or removed.

It helps React update the UI efficiently instead of re-rendering everything. */}
      {[
        <Todo key={1} title={"clash of minds"} done={false} />,

        <Todo key={2} title={"yo bitch give me money"} done={true} />,
      ]}
    </div>
  );
}

function Todo({ title, done }) {
  return (
    <div>
      {title} - {done ? "done" : "Not found"}
    </div>
  );
}

export default App;
