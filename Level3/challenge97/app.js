import express from "express";
import helmet from "helmet";

const app = express();

app.use(helmet()); 

app.get("/", (req, res) => {
  res.send("Hello Secure World");
});

app.listen(3000, () => {
  console.log("Server on http://localhost:3000");
});
