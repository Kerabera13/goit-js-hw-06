const categoriesList = document.querySelector('ul#categories');

console.log(`Number of categories: ${categoriesList.children.length}`);

const categoryItems = Array.from(categoriesList.children);

categoryItems.forEach(category => {
  const categoryName = category.firstElementChild.textContent;
  const subcategoriesList = category.lastElementChild.children;

  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${subcategoriesList.length}`);
});