import express from "express";
const app = express();

let cache = null, cacheTime = 0;

app.get("/data", (req, res) => {
  const now = Date.now();
  if (cache && now - cacheTime < 5000) {
    return res.send(cache);
  }
  cache = { msg: "fresh data", ts: now };
  cacheTime = now;
  res.send(cache);
});

app.listen(3000, () => console.log("Server on http://localhost:3000"));
