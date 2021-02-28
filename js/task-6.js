const refs = {
    formRef: document.querySelector('input#validation-input')
};

const onFocusOutHandler = function (event) {
  const textLength = Number(this.value.length);
  const minTextLength = Number(this.dataset.length);
  if (textLength !== minTextLength) {
    this.classList.add('invalid');
    this.classList.remove('valid');
  } else {
    this.classList.add('valid');
    this.classList.remove('invalid');
    } 
};

refs.formRef.addEventListener('blur', onFocusOutHandler);

