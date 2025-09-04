import { readFile } from "fs/promises";

// Race → returns the first settled promise (success or error)
Promise.race([readFile("a.txt"), readFile("missing.txt")])
  .then(d => console.log("Race:", d.length))
  .catch(e => console.error("Race error:", e.code));

// AllSettled → returns all results with their status
Promise.allSettled([readFile("a.txt"), readFile("missing.txt")])
  .then(r => console.log("AllSettled:", r));
