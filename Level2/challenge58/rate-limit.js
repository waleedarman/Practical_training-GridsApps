const express = require("express");
const app = express();

const ipHits = {};

app.use((req, res, next) => {
  const ip = req.ip;
  const now = Date.now();

  ipHits[ip] = ipHits[ip]?.filter(t => now - t < 60000) || [];
  if (ipHits[ip].length >= 60) return res.status(429).send("Too Many Requests");

  ipHits[ip].push(now);
  next();
});

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
