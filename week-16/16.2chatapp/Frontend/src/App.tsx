import { useEffect, useState, useRef } from "react";

function App() {
  // State to store chat messages with initial "Hello from server!" message
  const [messages, setMessages] = useState(["Hello from server!"]);

  // Refs to store WebSocket connection and input element
  const wsRef = useRef(); // WebSocket connection reference
  const inputRef = useRef(); // Input field reference

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");
    // Handle incoming messages from server
    ws.onmessage = (event) => {
      setMessages((m) => [...m, event.data]);
    };

    // Store WebSocket connection in ref for later use
    wsRef.current = ws;

    // At the moment you create the socket:
    // after connection with server is made
    ws.onopen = () => {
      ws.send(
        JSON.stringify({
          type: "join",
          payload: {
            roomId: "red",
          },
        }),
      );
    };

    return () => {
      ws.close();
    };
  }, []);

  return (
    <div className="h-screen flex flex-col bg-black p-4  ">
      <br />
      <div className="h-[90vh] m-4 p-3">
        {messages.map((message, index) => (
          <div key={index} className="flex">
            <span className="bg-white text-black rounded p-4 m-2">
              {" "}
              {message}
            </span>
          </div>
        ))}
      </div>
      <div className="w-full bg-white flex  p-4">
        <input
          ref={inputRef}
          type="text"
          className="flex-1 p-4"
          placeholder="abc"
        ></input>
        <button
          onClick={() => {
            wsRef.current?.send(
              JSON.stringify({
                type: "chat",
                payload: {
                  message: inputRef.current?.value,
                },
              }),
            );
          }}
          className="bg-purple-600 text-white"
        >
          Send message
        </button>
      </div>
    </div>
  );
}

export default App;
