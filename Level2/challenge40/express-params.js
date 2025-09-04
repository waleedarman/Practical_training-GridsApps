const express = require("express");
const app = express();

app.get("/users/:id", (req, res) => {
  res.json({ id: Number(req.params.id) });
});

app.listen(3000, () => console.log("http://localhost:3000"));
