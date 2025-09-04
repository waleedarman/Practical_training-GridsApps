const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: fs.createReadStream("input.csv"),
  crlfDelay: Infinity
});

rl.on("line", (line) => {
  const [name, age] = line.split(",");
  const obj = { name, age: Number(age) };
  console.log(JSON.stringify(obj));
});
