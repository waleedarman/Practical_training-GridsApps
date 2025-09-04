import express from "express";
const app = express();

app.get("/sum", (req, res) => {
  const { a, b } = req.query;
  res.json({ sum: Number(a) + Number(b) });
});

app.listen(4001, () => console.log("Service B on http://localhost:4001/sum"));
