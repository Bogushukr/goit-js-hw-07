const inputRef = document.querySelector('input#font-size-control');
const labelTextRef = document.querySelector('span#text');

labelTextRef.style.fontSize = `${inputRef.value}px`;

const onInputHandler = function (event) {
  labelTextRef.style.fontSize = `${this.value}px`;
};

inputRef.addEventListener('input', onInputHandler);