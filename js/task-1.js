const categoriesRef = document.querySelectorAll('li.item');
console.log(`В списке ${categoriesRef.length} категории.`);



categoriesRef.forEach(function (category) {
    const title = category.firstElementChild.textContent;
    const itemElements = category.querySelectorAll('li').length;
    console.log(`\n\u2022 Категория: ${title} \n\u2022 Количество элементов: ${itemElements}`);
});
  
