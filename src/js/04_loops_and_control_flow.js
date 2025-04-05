// ===== ЦИКЛЫ И УПРАВЛЕНИЕ ПОТОКОМ В JAVASCRIPT =====

// === Циклы for ===

// Стандартный цикл for
for (let i = 0; i < 5; i++) {
  console.log(i); // Выведет числа от 0 до 4
}

// Цикл for с несколькими переменными
for (let i = 0, j = 10; i < 5; i++, j--) {
  console.log(`i = ${i}, j = ${j}`); // i увеличивается, j уменьшается
}

// Пропуск итераций с continue
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) continue; // Пропускаем четные числа
  console.log(i); // Выведет только нечетные числа: 1, 3, 5, 7, 9
}

// Досрочное завершение цикла с break
for (let i = 0; i < 10; i++) {
  if (i === 5) break; // Выходим из цикла при i = 5
  console.log(i); // Выведет числа от 0 до 4
}

// === Цикл for...of ===

// Перебор элементов массива
const fruits = ["яблоко", "банан", "апельсин"];
for (const fruit of fruits) {
  console.log(fruit);
}
// Вывод:
// яблоко
// банан
// апельсин

// Перебор символов строки
const str = "Hello";
for (const char of str) {
  console.log(char);
}
// Вывод:
// H
// e
// l
// l
// o

// Перебор значений Map
const map = new Map([
  ["key1", "value1"],
  ["key2", "value2"]
]);
for (const [key, value] of map) {
  console.log(`${key}: ${value}`);
}
// Вывод:
// key1: value1
// key2: value2

// Перебор значений Set
const set = new Set([1, 2, 3, 2, 1]); // Дубликаты автоматически удаляются
for (const value of set) {
  console.log(value);
}
// Вывод:
// 1
// 2
// 3

// === Цикл for...in ===

// Перебор свойств объекта
const person = {
  name: "Иван",
  age: 30,
  city: "Москва"
};
for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}
// Вывод:
// name: Иван
// age: 30
// city: Москва

// Внимание: for...in перебирает также унаследованные свойства
// Для перебора только собственных свойств используйте проверку:
for (const key in person) {
  if (Object.hasOwnProperty.call(person, key)) {
    console.log(`${key}: ${person[key]}`);
  }
}

// === Цикл while ===

// Выполняется, пока условие истинно
let i = 0;
while (i < 5) {
  console.log(i); // Выведет числа от 0 до 4
  i++;
}

// Пример с условием в середине цикла
let j = 0;
while (j < 10) {
  j++;
  if (j % 2 === 0) continue; // Пропускаем четные числа
  console.log(j); // Выведет только нечетные числа: 1, 3, 5, 7, 9
  if (j === 7) break; // Выходим из цикла при j = 7
}

// === Цикл do...while ===

// Выполняется хотя бы один раз, затем проверяется условие
let k = 0;
do {
  console.log(k); // Выведет числа от 0 до 4
  k++;
} while (k < 5);

// Пример, когда условие изначально ложно
let m = 10;
do {
  console.log(m); // Выведет 10 (один раз), несмотря на то, что условие ложно
  m++;
} while (m < 10);

// === Вложенные циклы ===

// Пример вложенных циклов для работы с двумерным массивом
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(`matrix[${i}][${j}] = ${matrix[i][j]}`);
  }
}

// Пример с метками для выхода из вложенных циклов
outerLoop: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) {
      console.log("Выход из обоих циклов");
      break outerLoop; // Выходим из внешнего цикла
    }
    console.log(`i = ${i}, j = ${j}`);
  }
}

// === Методы перебора массивов ===

const numbers = [1, 2, 3, 4, 5];

// forEach - выполняет функцию для каждого элемента массива
numbers.forEach((number, index) => {
  console.log(`numbers[${index}] = ${number}`);
});

// map - создает новый массив с результатами вызова функции для каждого элемента
const doubled = numbers.map(number => number * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// filter - создает новый массив с элементами, прошедшими проверку
const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers); // [2, 4]

// find - возвращает первый элемент, удовлетворяющий условию
const found = numbers.find(number => number > 3);
console.log(found); // 4

// some - проверяет, удовлетворяет ли хотя бы один элемент условию
const hasEven = numbers.some(number => number % 2 === 0);
console.log(hasEven); // true

// every - проверяет, удовлетворяют ли все элементы условию
const allPositive = numbers.every(number => number > 0);
console.log(allPositive); // true

// reduce - сводит массив к одному значению
const sum = numbers.reduce((total, number) => total + number, 0);
console.log(sum); // 15

// === Управление потоком с помощью условных операторов ===

// if...else
const age = 18;
if (age >= 18) {
  console.log("Совершеннолетний");
} else {
  console.log("Несовершеннолетний");
}

// if...else if...else
const score = 85;
if (score >= 90) {
  console.log("Отлично");
} else if (score >= 70) {
  console.log("Хорошо");
} else if (score >= 50) {
  console.log("Удовлетворительно");
} else {
  console.log("Неудовлетворительно");
}

// Тернарный оператор
const status = age >= 18 ? "Взрослый" : "Ребенок";
console.log(status); // "Взрослый"

// Вложенные тернарные операторы (лучше избегать для читаемости)
const grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "D";
console.log(grade); // "B"

// switch
const day = 2;
switch (day) {
  case 1:
    console.log("Понедельник");
    break;
  case 2:
    console.log("Вторник");
    break;
  case 3:
    console.log("Среда");
    break;
  default:
    console.log("Другой день");
}

// switch без break (проваливание)
const month = 2;
switch (month) {
  case 12:
  case 1:
  case 2:
    console.log("Зима");
    break;
  case 3:
  case 4:
  case 5:
    console.log("Весна");
    break;
  default:
    console.log("Другое время года");
}

// === Обработка ошибок с try...catch ===

// Базовый пример
try {
  // Код, который может вызвать ошибку
  console.log(undefinedVariable); // Переменная не определена
} catch (error) {
  // Обработка ошибки
  console.log("Произошла ошибка:", error.message);
}
console.log("Выполнение продолжается"); // Этот код выполнится

// try...catch...finally
try {
  // Код, который может вызвать ошибку
  throw new Error("Пример ошибки");
} catch (error) {
  // Обработка ошибки
  console.log("Ошибка:", error.message);
} finally {
  // Этот блок выполнится в любом случае
  console.log("Блок finally выполнен");
}

// Создание собственных ошибок
function divide(a, b) {
  if (b === 0) {
    throw new Error("Деление на ноль недопустимо");
  }
  return a / b;
}

try {
  console.log(divide(10, 2)); // 5
  console.log(divide(10, 0)); // Вызовет ошибку
} catch (error) {
  console.log("Ошибка при делении:", error.message);
}
