const fs = require("fs");
const sync = fs.readFileSync("./data.txt");
console.log(sync.length);
fs.readFile("data.txt", (e, b) => console.log(b.length));
