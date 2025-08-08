document.getElementById("loadBtn").addEventListener("click", async () => {
  const module = await import('./lazyModule.js');
  module.showMessage();
});
