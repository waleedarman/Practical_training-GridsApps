const express = require("express");
const app = express();

app.get("/", (req, res) => { 
  throw new Error("Something went wrong"); 
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

app.listen(3000, () => console.log("http://localhost:3000"));
