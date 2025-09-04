const http = require("http");

const mws = [
  (req, res, next) => { console.log("First"); next(); },
  (req, res) => { console.log("Second"); res.end("Done!"); }
];

http.createServer((req, res) => {
  let i = 0;
  const next = () => { const fn = mws[i++]; if (fn) fn(req, res, next); };
  next();
}).listen(3000, () => console.log("http://localhost:3000"));
