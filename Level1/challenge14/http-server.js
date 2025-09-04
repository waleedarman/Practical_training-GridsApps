const http = require("http");

http.createServer((_, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ status: "ok" }));
}).listen(3000, () => {
  console.log("server is working on  http://localhost:3000");
});
