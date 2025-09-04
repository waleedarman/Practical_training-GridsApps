const express = require("express");
const app = express();
app.use(express.json());

let todos = [];
let id = 1;

// Create
app.post("/todos", (req, res) => {
  const todo = { id: id++, text: req.body.text, done: false };
  todos.push(todo);
  res.json(todo);
});

// Read all
app.get("/todos", (req, res) => res.json(todos));

// Update
app.put("/todos/:id", (req, res) => {
  const t = todos.find(x => x.id == req.params.id);
  if (!t) return res.sendStatus(404);
  t.text = req.body.text ?? t.text;
  t.done = req.body.done ?? t.done;
  res.json(t);
});

// Delete
app.delete("/todos/:id", (req, res) => {
  todos = todos.filter(x => x.id != req.params.id);
  res.sendStatus(204);
});

app.listen(3000, () => console.log("http://localhost:3000"));
