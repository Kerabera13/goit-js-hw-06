// Отримуємо список усіх елементів li.item
const categoriesList = document.querySelectorAll('ul#categories > li.item');

// Виводимо кількість категорій
console.log(`Всього категорій: ${categoriesList.length}`);

// Ітеруємося по кожній категорії
categoriesList.forEach(category => {
  // Отримуємо текст заголовку (тегу <h2>) кожної категорії
  const categoryName = category.querySelector('h2').textContent;
  
  // Отримуємо список усіх підкатегорій (елементів <li>) в даній категорії
  const subcategoriesList = category.querySelectorAll('ul > li');
  
  // Виводимо текст заголовку та кількість підкатегорій
  console.log(`Категорія: ${categoryName}`);
  console.log(`Кількість елементів в категорії "${categoryName}": ${subcategoriesList.length}`);
});