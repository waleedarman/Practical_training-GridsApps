const http = require("http");
const mongoose = require("mongoose");

const server = http.createServer((req, res) => res.end("OK"));

server.listen(3000, async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/users_demo");
  console.log("Server on 3000, DB connected");
});

process.on("SIGINT", async () => {
  console.log("Shutting down...");
  server.close(async () => {
    await mongoose.connection.close();
    process.exit(0);
  });
});
