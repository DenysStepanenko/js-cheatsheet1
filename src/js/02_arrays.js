// ===== МАССИВЫ В JAVASCRIPT =====

// === Создание массивов ===

// Литерал массива
const fruits = ["яблоко", "банан", "апельсин"];

// Конструктор Array
const numbers = new Array(1, 2, 3, 4, 5);

// Создание пустого массива
const emptyArray1 = [];
const emptyArray2 = new Array();

// Создание массива с предопределенной длиной
const arrayWithLength = new Array(5); // [empty × 5]

// Создание массива из строки
const letters = Array.from("hello"); // ["h", "e", "l", "l", "o"]

// Создание массива с помощью Array.of()
const digits = Array.of(1, 2, 3); // [1, 2, 3]

// === Доступ к элементам массива ===

// Доступ по индексу (индексы начинаются с 0)
console.log(fruits[0]); // "яблоко"
console.log(fruits[1]); // "банан"
console.log(fruits[2]); // "апельсин"

// Доступ к несуществующему элементу
console.log(fruits[3]); // undefined

// Изменение элемента по индексу
fruits[1] = "груша";
console.log(fruits); // ["яблоко", "груша", "апельсин"]

// Длина массива
console.log(fruits.length); // 3

// Доступ к последнему элементу
console.log(fruits[fruits.length - 1]); // "апельсин"

// === Основные методы массивов ===

// Добавление элементов
const planets = ["Земля", "Марс"];
planets.push("Венера");       // Добавляет в конец, возвращает новую длину
console.log(planets);         // ["Земля", "Марс", "Венера"]

planets.unshift("Меркурий");  // Добавляет в начало, возвращает новую длину
console.log(planets);         // ["Меркурий", "Земля", "Марс", "Венера"]

// Удаление элементов
const lastPlanet = planets.pop();  // Удаляет с конца, возвращает удаленный элемент
console.log(lastPlanet);           // "Венера"
console.log(planets);              // ["Меркурий", "Земля", "Марс"]

const firstPlanet = planets.shift(); // Удаляет с начала, возвращает удаленный элемент
console.log(firstPlanet);           // "Меркурий"
console.log(planets);               // ["Земля", "Марс"]

// Поиск элементов
const colors = ["красный", "зеленый", "синий", "зеленый"];

// indexOf - возвращает индекс первого найденного элемента или -1
console.log(colors.indexOf("зеленый"));     // 1
console.log(colors.indexOf("желтый"));      // -1
console.log(colors.indexOf("зеленый", 2));  // 3 (начинает поиск с индекса 2)

// lastIndexOf - возвращает индекс последнего найденного элемента или -1
console.log(colors.lastIndexOf("зеленый")); // 3

// includes - проверяет наличие элемента, возвращает true или false
console.log(colors.includes("синий"));      // true
console.log(colors.includes("желтый"));     // false

// find - возвращает первый элемент, удовлетворяющий условию, или undefined
const numbers2 = [5, 12, 8, 130, 44];
const found = numbers2.find(element => element > 10);
console.log(found); // 12

// findIndex - возвращает индекс первого элемента, удовлетворяющего условию, или -1
const foundIndex = numbers2.findIndex(element => element > 10);
console.log(foundIndex); // 1

// Объединение и разделение массивов
const arr1 = [1, 2];
const arr2 = [3, 4];

// concat - объединяет массивы
const combined = arr1.concat(arr2);
console.log(combined); // [1, 2, 3, 4]

// slice - возвращает часть массива
const numbers3 = [1, 2, 3, 4, 5];
console.log(numbers3.slice(2));     // [3, 4, 5] (с индекса 2 до конца)
console.log(numbers3.slice(1, 4));  // [2, 3, 4] (с индекса 1 до 4, не включая 4)
console.log(numbers3.slice(-2));    // [4, 5] (последние 2 элемента)

// splice - изменяет содержимое массива, удаляя/заменяя/добавляя элементы
const months = ["Янв", "Март", "Апр", "Июнь"];
months.splice(1, 0, "Фев");         // Вставляет "Фев" на позицию 1
console.log(months);                // ["Янв", "Фев", "Март", "Апр", "Июнь"]

months.splice(4, 1, "Май");         // Заменяет 1 элемент на позиции 4 на "Май"
console.log(months);                // ["Янв", "Фев", "Март", "Апр", "Май"]

// join - объединяет элементы массива в строку
console.log(months.join());         // "Янв,Фев,Март,Апр,Май"
console.log(months.join(" - "));    // "Янв - Фев - Март - Апр - Май"

// === Перебор элементов массива ===

const items = ["item1", "item2", "item3"];

// for
for (let i = 0; i < items.length; i++) {
  console.log(items[i]);
}

// for...of
for (const item of items) {
  console.log(item);
}

// forEach
items.forEach(item => {
  console.log(item);
});

// forEach с индексом
items.forEach((item, index) => {
  console.log(`${index}: ${item}`);
});

// === Преобразование массивов ===

const numbers4 = [1, 2, 3, 4, 5];

// map - создает новый массив с результатами вызова функции для каждого элемента
const doubled = numbers4.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// filter - создает новый массив с элементами, прошедшими проверку
const evenNumbers = numbers4.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4]

// reduce - сводит массив к одному значению
const sum = numbers4.reduce((total, num) => total + num, 0);
console.log(sum); // 15

// sort - сортирует элементы массива (изменяет исходный массив)
const fruits2 = ["банан", "яблоко", "груша", "апельсин"];
fruits2.sort();
console.log(fruits2); // ["апельсин", "банан", "груша", "яблоко"]

// Сортировка чисел (по умолчанию сортирует как строки)
const nums = [40, 1, 5, 200];
nums.sort();
console.log(nums); // [1, 200, 40, 5] (лексикографическая сортировка)

// Правильная сортировка чисел
nums.sort((a, b) => a - b);
console.log(nums); // [1, 5, 40, 200] (числовая сортировка по возрастанию)

nums.sort((a, b) => b - a);
console.log(nums); // [200, 40, 5, 1] (числовая сортировка по убыванию)

// reverse - обращает порядок элементов в массиве
const letters2 = ["a", "b", "c"];
letters2.reverse();
console.log(letters2); // ["c", "b", "a"]

// === Многомерные массивы ===

// Двумерный массив (матрица)
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

// Доступ к элементам
console.log(matrix[1][2]); // 6 (элемент во второй строке, третьем столбце)

// Перебор элементов двумерного массива
for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(matrix[i][j]);
  }
}

// === Проверка массива ===

// Проверка, является ли переменная массивом
console.log(Array.isArray([]));        // true
console.log(Array.isArray([1, 2, 3])); // true
console.log(Array.isArray({}));        // false
console.log(Array.isArray("array"));   // false
