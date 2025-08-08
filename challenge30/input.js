export function getInputValue(inputId) {
  const input = document.getElementById(inputId);
  return input ? input.value.trim() : '';
}
