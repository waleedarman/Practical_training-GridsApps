const express = require("express");
const app = express();

app.use(express.json());

app.post("/users", (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }
  res.json({ email });
});

app.listen(3000, () => console.log("http://localhost:3000"));
