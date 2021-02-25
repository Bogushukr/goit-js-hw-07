const categoriesRef = document.querySelectorAll('li.item');
console.log(`В списке ${categoriesRef.length} категории.`);
// console.log(categoriesRef);


categoriesRef.forEach(function (category) {
    const title = category.firstElementChild.textContent;
    const itemElements = category.querySelectorAll('li').length;
    console.log(`\n Категория: ${title} \n Количество элементов: ${itemElements}`);
});
  
