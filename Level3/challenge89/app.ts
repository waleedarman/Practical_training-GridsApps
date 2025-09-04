import express from "express";

const app = express();

app.get("/home", (req, res) => {
  if (process.env.FEATURE_NEW_HOME === "true") {
    return res.send("Welcome to the NEW Home Page!");
  }
  res.send("Welcome to the OLD Home Page!");
});

app.listen(3000, () => {
  console.log("Server on http://localhost:3000");
});
