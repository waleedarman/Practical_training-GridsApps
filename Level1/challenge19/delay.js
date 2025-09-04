const delay = ms => new Promise(res => setTimeout(res, ms));
(async () => { await delay(500); console.log("done"); })();
