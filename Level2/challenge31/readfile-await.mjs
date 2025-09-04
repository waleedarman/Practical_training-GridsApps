import { readFile } from "fs/promises";

try {
  const data = await readFile("a.txt");
  console.log(data.length);
} catch (err) {
  console.error(err);
}
