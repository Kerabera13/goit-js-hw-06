const categoriesList = document.querySelectorAll('ul#categories > li.item');

console.log(`Number of categories: ${categoriesList.length}`);

categoriesList.forEach(category => {
  const categoryName = category.querySelector('h2').textContent;
  
  const subcategoriesList = category.querySelectorAll('ul > li');
  
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${subcategoriesList.length}`);
});