const express = require("express");
const app = express();

app.get("/", (req, res) => {
  const raw = req.query.name || ""; 
  const name = raw.replace(/</g, "&lt;").replace(/>/g, "&gt;");
  res.send(`Hello, ${name || "Guest"}`);
});

app.listen(3000, () => {
  console.log("Server is running at http://localhost:3000");
});
