const fs = require("fs");
let lines = 0, carry = "";

fs.createReadStream("input.txt", "utf8")
  .on("data", ch => {
    const p = (carry + ch).split("\n");
    carry = p.pop();
    lines += p.length;
  })
  .on("end", () => {
    if (carry) lines++;
    console.log(lines);
  });
