const formRef = document.querySelector('input#validation-input');

const onFocusOutHandler = function (event) {
  const textLength = this.value.length;
  const minTextLength = this.dataset.length;
  if (textLength < minTextLength) {
    this.classList.add('invalid');
    this.classList.remove('valid');
  } else {
    this.classList.add('valid');
    this.classList.remove('invalid');
    } 
};

formRef.addEventListener('blur', onFocusOutHandler);