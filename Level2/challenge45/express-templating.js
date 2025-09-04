const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.set("views", __dirname);

app.get("/", (req, res) => {
  res.render("index", { title: "Home" });
});

app.listen(3000, () => console.log("http://localhost:3000"));
