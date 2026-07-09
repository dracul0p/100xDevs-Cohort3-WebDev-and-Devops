import { useEffect, useState, useRef } from "react";
import "./App.css";
function App() {
  // @ts-ignore
  const [socket, setSocket] = useState();
  const inputRef = useRef();

  function sendMessage() {
    if (!socket) {
      return;
    }
    
    const message = inputRef.current?.value;
    socket.send(message);
  }

  //whenever app mount stablish persistance connection ws
  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");
    setSocket(ws);
    // when message comes from server

    ws.onmessage = (ev) => {
      alert(ev.data);
    };
  }, []);
  return (
    <div className="container">
      <div className="input-group">
        <input ref={inputRef} type="text" placeholder="Enter something" />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default App;
