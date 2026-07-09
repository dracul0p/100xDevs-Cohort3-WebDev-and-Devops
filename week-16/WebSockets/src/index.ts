import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

// event handler
// wss.on("connection", function connection(socket) {
//   console.log("user conn");
//   setInterval(() => {
//     socket.send("hello" + Math.random());
//   }, 500);

//   socket.on("message", (e) => {
//     console.log(e.toString());
//   });
// });

// ping-pong with web socket
wss.on("connection", function connection(socket) {
  socket.on("message", (data) => {
    const msg = data.toString().trim();

    console.log("msg:", msg);
    console.log(msg === "ping");

    if (msg === "ping") {
      socket.send("pong");
    }
  });
});
