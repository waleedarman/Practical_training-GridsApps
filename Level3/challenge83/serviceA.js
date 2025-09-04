async function callServiceB(a, b, retries = 3) {
  const url = `http://localhost:4001/sum?a=${a}&b=${b}`;
  for (let i = 0; i < retries; i++) {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error();
      return await res.json();
    } catch {
      console.log(`Retry ${i + 1} failed`);
      if (i === retries - 1) throw new Error("Failed after retries");
    }
  }
}

callServiceB(2, 3)
  .then(console.log)  
  .catch(console.error);
