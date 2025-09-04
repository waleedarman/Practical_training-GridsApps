import { readFile } from "fs/promises";

try {
  const [a, b] = await Promise.all([
    readFile("a.txt"),
    readFile("b.txt"),
  ]);

  console.log("Total bytes:", a.length + b.length);
} catch (err) {
  console.error(err);
}
