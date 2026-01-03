import { useEffect, useState } from "react";

function App() {
  const [currentTab, setCurrentTab] = useState(0);
  const [tabData, setTabData] = useState({});

  const [loading, setLoading] = useState(true);

  useEffect(
    function () {
      // Send a backend request to fetch the data for the current tab
      // Log the current tab to the console
      console.log("Sent request to backend to get data for tab", currentTab);

      setLoading(true);
      fetch("https://jsonplaceholder.typicode.com/todos/" + currentTab).then(
        async (res) => {
          const json = await res.json();
          setTabData(json);
          setLoading(false);
        }
      );
    },
    [currentTab]
  );

  return (
    <div>
      <button
        onClick={function () {
          setCurrentTab("1");
        }}
        style={{ color: currentTab === "1" ? "red" : "black" }}
      >
        Todo #1
      </button>
      <button
        onClick={function () {
          setCurrentTab("2");
        }}
        style={{ color: currentTab === "2" ? "red" : "black" }}
      >
        Todo #2
      </button>
      <button
        onClick={function () {
          setCurrentTab("3");
        }}
        style={{ color: currentTab === "3" ? "red" : "black" }}
      >
        Todo #3
      </button>
      <button
        onClick={function () {
          setCurrentTab("4");
        }}
        style={{ color: currentTab === "4" ? "red" : "black" }}
      >
        Todo #4
      </button>

      <div>{loading ? "Loading..." : tabData.title}</div>
    </div>
  );
}

export default App;
