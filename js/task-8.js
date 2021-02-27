const boxesRef = document.querySelector('div#boxes');
const controlsRef = document.querySelector('div#controls input');
const buttonsEls = document.querySelectorAll('div#controls button');

const colorGenerator = () => {
  const [red, green, blue] = [0, 1, 2].map(() => {
    return Math.floor(Math.random() * 256);
  });
  return `rgb(${red},${green},${blue})`;
};

const boxGenerator = position => {
  const divObj = document.createElement('div');
  divObj.style.width = `${30 + 10 * position}px`;
  divObj.style.height = `${30 + 10 * position}px`;
  divObj.style.backgroundColor = colorGenerator();
  return divObj;
};

const createBoxes = amount => {
  const listObj = [];
  for (let i = 0; i < amount; i += 1) {
    listObj.push(boxGenerator(i));
  }
  boxesRef.append(...listObj);
};

const destroyBoxes = () => {
  boxesRef.innerHTML = '';
};

const render = function () {
  if (boxesRef.childElementCount) {
    destroyBoxes();
  }
  const amount = controlsRef.value;
  createBoxes(amount);
};

buttonsEls.forEach(button => {
  const action = button.dataset.action;
  button.addEventListener('click', { render, destroy: destroyBoxes }[action]);
});