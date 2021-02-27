const captionEl = document.querySelector('span#value');
const buttons = document.querySelectorAll('#counter [data-action]');
let counterValue;
document.addEventListener('DOMContentLoaded', () => {
  counterValue = Number(captionEl.textContent);
});
const increment = () => {
  counterValue += 1;
  captionEl.textContent = counterValue;
};
const decrement = () => {
  if (counterValue > 0) {
    counterValue -= 1;
    captionEl.textContent = counterValue;
  }
};
buttons.forEach(button => {
  const action = button.dataset.action;
  button.addEventListener(
    'click',
    {
      increment,
      decrement,
    }[action],
  );
});