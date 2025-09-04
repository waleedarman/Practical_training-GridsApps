const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 3000 }, () => {
  console.log("WebSocket server is running on ws://localhost:3000");
});

wss.on("connection", (ws) => {
  console.log("Client connected");

  ws.on("message", (msg) => {
    console.log("Received:", msg.toString());
    ws.send("server: " + msg);
  });

  ws.on("close", () => {
    console.log("Client disconnected");
  });
});
