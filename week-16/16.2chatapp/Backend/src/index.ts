import { log } from "node:console";
import { WebSocketServer, WebSocket } from "ws";

// Create a WebSocket server instance listening on port 8080
const wss = new WebSocketServer({ port: 8080 });

// Define a User interface to type the connection information
// Each user has a WebSocket connection and belongs to a specific room
interface User {
  socket: WebSocket;
  room: string;
}

let userCount = 0;
let allSockets: WebSocket[] = [];

// Listen for new WebSocket connections
wss.on("connection", (socket) => {
  allSockets.push(socket);
  userCount += 1;
  console.log("user connecte #" + userCount);

  socket.on("message", (message) => {
    log("Message received: " + message.toString());

    for (let i = 0; i < allSockets.length; i++) {
      const s = allSockets[i];
      //@ts-ignore
      s.send(message.toString() + " server from server");
    }
  });

  socket.on("close", () => {
    userCount -= 1;
    console.log("user disconnected #" + userCount);
    allSockets = allSockets.filter((x) => x != socket);
  });
});
