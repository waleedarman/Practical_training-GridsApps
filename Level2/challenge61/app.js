const express = require("express");
const jwtMiddleware = require("./jwt-middleware");
const jwt = require("jsonwebtoken");
const app = express();

app.get("/public", (req, res) => {
  res.send("Anyone can access this.");
});

app.get("/secret", jwtMiddleware, (req, res) => {
  res.send(`Hello user ${req.user.userId}, this is protected!`);
});

const token = jwt.sign({ userId: 123 }, "secret123", { expiresIn: "1h" });
console.log("Your JWT token:", token);

app.listen(3000, () => {
  console.log("http://localhost:3000");
});
