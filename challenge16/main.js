document.getElementById('greetBtn').addEventListener('click', async () => {
    const name = document.getElementById('nameInput').value;
    const module = await import('./helper.js');
    const greeting = module.greet(name);
    alert(greeting);
});
