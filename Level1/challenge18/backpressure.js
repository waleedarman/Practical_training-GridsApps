const fs = require("fs");

const r = fs.createReadStream("input.txt");     
const w = fs.createWriteStream("output.txt");  

r.on("data", chunk => {
if (!w.write(chunk)) r.pause();
});

w.on("drain", () => r.resume());

r.on("end", () => w.end());
