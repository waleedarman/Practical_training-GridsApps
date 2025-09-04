const { setTimeout } = require("timers/promises");

const controller = new AbortController();

setTimeout(5000, "done", { signal: controller.signal })
  .then(console.log)
  .catch(err => console.error("Aborted:", err.name));

setTimeout(1000).then(() => controller.abort());
