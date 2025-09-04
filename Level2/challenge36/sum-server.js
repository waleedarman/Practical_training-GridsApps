const http = require("http");

http.createServer((req, res) => {
  if (req.method === "POST" && req.url === "/sum") {
    let body = "";
    req.on("data", c => body += c);
    req.on("end", () => {
      try {
        const { a, b } = JSON.parse(body);
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ sum: a + b }));
      } catch {
        res.writeHead(400, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Invalid JSON" }));
      }
    });
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Not found" }));
  }
}).listen(3000, () => console.log("Server running at http://localhost:3000"));
