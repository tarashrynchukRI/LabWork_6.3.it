// lab_6.2
// Гринчук Тарас
// Лабораторна робота № 6.2
// Опрацювання одновимірних масивів ітераційним способом
// Варіант №4

// Ітераційний спосіб
function generateArray(size, min, max) {
   const array = [];
   for (let i = 0; i < size; i++) {
      array[i] = Math.floor(Math.random() * (max - min + 1)) + min;
   }
   return array;
}
// За допомогою звичайної функції
function printElements(array) {
   console.log('--------------------------------');
   for (let i = 0; i < array.length; i++) {
      const element = array[i];
      console.log(element);
   }
   console.log('--------------------------------');
   return 0;
}

const array = generateArray(10, 1, 100);
console.log("Сформований масив: " + array.join(", "));
console.log(printElements(array));

// За допомогою шаблону функції для реалізації універсального алгоритму
function printElements2(array) {
   const elements = [];
   for (let i = 0; i < array.length; i++) {
      elements.push(array[i]);
   }
   return elements;
}
const elements = printElements2(array);
console.log('--------------------------------');
for (let i = 0; i < elements.length; i++) {
   console.log(elements[i]);
}
console.log('--------------------------------');