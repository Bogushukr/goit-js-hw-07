const inputRef = document.querySelector('input#name-input');
const titleRef = document.querySelector('span#name-output');
const defaultNameText = 'незнакомец';

const onInputHandler = event => {
  titleRef.textContent = inputRef.value ? inputRef.value : defaultNameText;
};

inputRef.addEventListener('input', onInputHandler);