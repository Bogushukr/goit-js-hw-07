const refs = {
  form: document.querySelector('input#validation-input')
};

refs.form.addEventListener('blur', () => {
  if (refs.form.value.length === Number(refs.form.getAttribute('data-length'))
  ) {
    refs.form.className = 'invalid';
    refs.form.className = 'valid';
  } else {
    refs.form.className = 'valid';
    refs.form.className = 'invalid';
    } 
});