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

// [
//   { socket: "add", room: 123 },
//   { socket: "xyz", room: 323 },
// ];

let userCount = 0;
let allSockets: User[] = [];

// Listen for new WebSocket connections
wss.on("connection", (socket) => {
  userCount += 1;
  console.log("user connecte #" + userCount);

  // Handle 'join' message type - when a user wants to join a room
  socket.on("message", (message) => {
    // Parse the incoming message from JSON string to object
    // @ts-ignore is used to bypass TypeScript type checking for the JSON.parse
    const parsedMessage = JSON.parse(message);

    if (parsedMessage.type === "join") {
      // Add the new user to allSockets array with their socket and requested room
      allSockets.push({
        socket,
        room: parsedMessage.payload.roomId,
      });
    }

    // Handle 'chat' message type - when a user sends a chat message
    if (parsedMessage.type === "chat") {
      // Find the room of the user who sent the message
      const user = allSockets.find((x) => x.socket === socket);
      if (!user) {
        return;
      }
      const currentUserRoom = user.room;

      // Broadcast the message to all users in the same room
      for (let i = 0; i < allSockets.length; i++) {
        if (allSockets[i].room === currentUserRoom) {
          allSockets[i]?.socket.send(parsedMessage.payload.message);
        }
      }
    }
  });

  socket.on("close", () => {
    userCount -= 1;
    console.log("user disconnected #" + userCount);
    allSockets = allSockets.filter((x) => x.socket != socket);
  });
  
});
