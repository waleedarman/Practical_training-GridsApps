const http = require("http");
const { URL } = require("url");

http.createServer((req, res) => {
  if (req.method === "GET" && req.url.startsWith("/greet")) {
    const url = new URL(req.url, `http://${req.headers.host}`);
    const name = url.searchParams.get("name") || "Guest";

    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(`Hello, ${name}`);
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not found");
  }
}).listen(3000, () => console.log("http://localhost:3000"));
