const express = require("express");
const app = express();

app.use((req, res, next) => {
  const start = Date.now();
  res.on("finish", () => {
    const ms = Date.now() - start;
    console.log(`${req.method} ${req.url} - ${ms}ms`);
  });
  next();
});

app.get("/", (req, res) => res.send("OK"));

app.listen(3000, () => console.log("http://localhost:3000"));
