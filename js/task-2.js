const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsRef = document.querySelector('#ingredients');

const ingredientsList = ingredients.map(ingredient => {
  const ingredientEl = document.createElement('li');
  ingredientEl.textContent = ingredient;

  return ingredientEl;
});

ingredientsRef.append(...ingredientsList);


