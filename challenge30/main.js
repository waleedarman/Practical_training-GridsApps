import { getInputValue } from './input.js';

document.getElementById('submitBtn').addEventListener('click', () => {
  const name = getInputValue('nameInput');

  if (name) {
    alert(`Hello, ${name}!`);
  } else {
    alert('Please enter your name.');
  }
});
