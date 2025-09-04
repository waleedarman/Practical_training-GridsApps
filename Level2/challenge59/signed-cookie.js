const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();

app.use(cookieParser("mysecret")); 

app.get("/set", (req, res) => {
  res.cookie("sid", "12345", { signed: true });
  res.send("Signed cookie set");
});

app.get("/get", (req, res) => {
  const sid = req.signedCookies.sid;
  res.send("SID = " + sid);
});

app.listen(3000, () => {
  console.log("http://localhost:3000");
});
