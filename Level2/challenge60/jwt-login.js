const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();

app.use(express.json());

app.post("/login", (req, res) => {
  if (req.body.username === "admin" && req.body.password === "123") {
    const token = jwt.sign({ userId: 1 }, "secret", { algorithm: "HS256" });
    res.json({ token });
  } else {
    res.sendStatus(401);
  }
});

app.listen(3000, () => {
  console.log("http://localhost:3000");
});
