# JavaScript: Полное руководство для изучения

Это структурированное руководство по JavaScript, созданное на основе ваших учебных материалов. Оно содержит подробные объяснения, примеры кода с комментариями и практические упражнения для эффективного изучения JavaScript.

## Содержание

1. [Основы JavaScript](#основы-javascript)
2. [Массивы](#массивы)
3. [Функции](#функции)
4. [Циклы и управление потоком](#циклы-и-управление-потоком)
5. [Объекты](#объекты)
6. [Практические упражнения](#практические-упражнения)
7. [Проекты для закрепления](#проекты-для-закрепления)
8. [Ресурсы для дальнейшего изучения](#ресурсы-для-дальнейшего-изучения)

## Основы JavaScript

Основы JavaScript включают переменные, типы данных, операторы, строки и условные конструкции. Эти концепции являются фундаментом для дальнейшего изучения языка.

### Переменные и типы данных

В JavaScript существует три способа объявления переменных:

```javascript
// var - устаревший способ (не рекомендуется в современном коде)
var oldVariable = "старая переменная";

// let - для переменных, значение которых может изменяться
let name = "Иван";
name = "Петр"; // можно изменить значение

// const - для констант, значение которых не должно изменяться
const PI = 3.14159;
// PI = 3; // Ошибка! Нельзя изменить константу
```

JavaScript имеет следующие основные типы данных:

```javascript
// Примитивные типы данных
let string = "Это строка"; // Строка (String)
let number = 42;           // Число (Number)
let bigInt = 9007199254740991n; // BigInt (для очень больших чисел)
let boolean = true;        // Логический тип (Boolean): true или false
let nullValue = null;      // Null (пустое значение)
let undefinedValue;        // Undefined (неопределенное значение)
let symbol = Symbol("id"); // Symbol (уникальный идентификатор)

// Ссылочный тип данных
let object = {             // Объект (Object)
  name: "Иван",
  age: 30
};
```

### Операторы

JavaScript поддерживает различные типы операторов:

```javascript
// Арифметические операторы
let sum = 5 + 3;        // 8 (сложение)
let difference = 5 - 3; // 2 (вычитание)
let product = 5 * 3;    // 15 (умножение)
let quotient = 5 / 3;   // 1.6666... (деление)
let remainder = 5 % 3;  // 2 (остаток от деления)
let power = 5 ** 3;     // 125 (возведение в степень)

// Операторы присваивания
let x = 5;
x += 3; // x = x + 3 (8)
x -= 2; // x = x - 2 (6)
x *= 2; // x = x * 2 (12)
x /= 4; // x = x / 4 (3)

// Операторы сравнения
let isEqual = 5 == "5";     // true (равно с приведением типов)
let isStrictEqual = 5 === "5"; // false (строго равно, без приведения типов)
let isNotEqual = 5 != "6";  // true (не равно)
let isGreater = 5 > 3;      // true (больше)
let isLess = 5 < 10;        // true (меньше)
let isGreaterOrEqual = 5 >= 5; // true (больше или равно)
let isLessOrEqual = 5 <= 6;    // true (меньше или равно)

// Логические операторы
let and = true && false; // false (логическое И)
let or = true || false;  // true (логическое ИЛИ)
let not = !true;         // false (логическое НЕ)

// Инкремент и декремент
let a = 5;
let b = a++; // b = 5, a = 6 (постфиксный инкремент)
let c = 5;
let d = ++c; // d = 6, c = 6 (префиксный инкремент)
```

### Строки и шаблонные строки

Строки в JavaScript можно создавать с помощью одинарных, двойных кавычек или обратных кавычек (для шаблонных строк):

```javascript
// Создание строк
let singleQuotes = 'Строка в одинарных кавычках';
let doubleQuotes = "Строка в двойных кавычках";

// Экранирование символов
let escapeQuote = "Он сказал: \"Привет!\"";
let escapePath = "C:\\Program Files\\App"; // Двойной обратный слеш для экранирования

// Шаблонные строки (template literals)
let name = "Иван";
let age = 30;
let greeting = `Привет, меня зовут ${name} и мне ${age} лет.`;
console.log(greeting); // "Привет, меня зовут Иван и мне 30 лет."

// Многострочные шаблонные строки
let multiline = `Это первая строка.
Это вторая строка.
А это третья строка.`;
```

### Методы строк

JavaScript предоставляет множество встроенных методов для работы со строками:

```javascript
let text = "Привет, мир!";

// Получение длины строки
console.log(text.length); // 12

// Получение символа по индексу
console.log(text[0]); // "П"
console.log(text.charAt(0)); // "П"

// Поиск подстроки
console.log(text.indexOf("мир")); // 8
console.log(text.includes("Привет")); // true

// Извлечение подстроки
console.log(text.substring(0, 6)); // "Привет"
console.log(text.slice(8, 11)); // "мир"

// Замена подстроки
console.log(text.replace("мир", "JavaScript")); // "Привет, JavaScript!"

// Преобразование регистра
console.log(text.toUpperCase()); // "ПРИВЕТ, МИР!"
console.log(text.toLowerCase()); // "привет, мир!"

// Удаление пробелов в начале и конце
let paddedText = "   Текст с пробелами   ";
console.log(paddedText.trim()); // "Текст с пробелами"

// Разделение строки на массив
console.log("яблоко,банан,киви".split(",")); // ["яблоко", "банан", "киви"]
```

### Условные конструкции

Условные конструкции позволяют выполнять различный код в зависимости от условий:

```javascript
// if...else
let age = 18;

if (age >= 18) {
  console.log("Вы совершеннолетний");
} else {
  console.log("Вы несовершеннолетний");
}

// if...else if...else
let score = 85;

if (score >= 90) {
  console.log("Отлично");
} else if (score >= 80) {
  console.log("Хорошо");
} else if (score >= 70) {
  console.log("Удовлетворительно");
} else {
  console.log("Неудовлетворительно");
}

// Тернарный оператор
let message = age >= 18 ? "Совершеннолетний" : "Несовершеннолетний";
console.log(message);

// switch
let day = 2;
let dayName;

switch (day) {
  case 1:
    dayName = "Понедельник";
    break;
  case 2:
    dayName = "Вторник";
    break;
  case 3:
    dayName = "Среда";
    break;
  case 4:
    dayName = "Четверг";
    break;
  case 5:
    dayName = "Пятница";
    break;
  case 6:
    dayName = "Суббота";
    break;
  case 7:
    dayName = "Воскресенье";
    break;
  default:
    dayName = "Неизвестный день";
}

console.log(dayName); // "Вторник"
```

## Массивы

Массивы в JavaScript - это упорядоченные коллекции элементов, которые могут быть разных типов.

### Создание массивов

```javascript
// Создание массива с помощью литерала массива
let fruits = ["яблоко", "банан", "апельсин"];

// Создание массива с помощью конструктора Array
let numbers = new Array(1, 2, 3, 4, 5);

// Создание пустого массива
let emptyArray = [];

// Создание массива с разными типами данных
let mixedArray = [1, "два", true, { name: "Иван" }, [5, 6]];

// Создание массива определенной длины
let arrayWithLength = new Array(5); // Создает массив с 5 пустыми элементами
```

### Доступ к элементам массива

```javascript
let fruits = ["яблоко", "банан", "апельсин", "киви"];

// Доступ по индексу (индексы начинаются с 0)
console.log(fruits[0]); // "яблоко"
console.log(fruits[2]); // "апельсин"

// Изменение элемента по индексу
fruits[1] = "груша";
console.log(fruits); // ["яблоко", "груша", "апельсин", "киви"]

// Длина массива
console.log(fruits.length); // 4

// Доступ к последнему элементу
console.log(fruits[fruits.length - 1]); // "киви"
```

### Основные методы массивов

```javascript
let fruits = ["яблоко", "банан", "апельсин"];

// Добавление элементов
fruits.push("киви");       // Добавляет в конец массива
console.log(fruits);       // ["яблоко", "банан", "апельсин", "киви"]

fruits.unshift("манго");   // Добавляет в начало массива
console.log(fruits);       // ["манго", "яблоко", "банан", "апельсин", "киви"]

// Удаление элементов
let lastFruit = fruits.pop();  // Удаляет последний элемент и возвращает его
console.log(lastFruit);        // "киви"
console.log(fruits);           // ["манго", "яблоко", "банан", "апельсин"]

let firstFruit = fruits.shift(); // Удаляет первый элемент и возвращает его
console.log(firstFruit);       // "манго"
console.log(fruits);           // ["яблоко", "банан", "апельсин"]

// Поиск элементов
console.log(fruits.indexOf("банан")); // 1
console.log(fruits.includes("киви")); // false

// Объединение массивов
let moreFruits = ["киви", "груша"];
let allFruits = fruits.concat(moreFruits);
console.log(allFruits); // ["яблоко", "банан", "апельсин", "киви", "груша"]

// Создание строки из массива
console.log(fruits.join(", ")); // "яблоко, банан, апельсин"

// Получение части массива
let citrusFruits = allFruits.slice(2, 4); // Элементы с индекса 2 до 4 (не включая 4)
console.log(citrusFruits); // ["апельсин", "киви"]

// Изменение массива (удаление, замена, добавление элементов)
// splice(startIndex, deleteCount, item1, item2, ...)
fruits.splice(1, 1, "груша", "виноград"); // Удаляет 1 элемент начиная с индекса 1 и добавляет новые
console.log(fruits); // ["яблоко", "груша", "виноград", "апельсин"]
```

### Методы перебора массивов

```javascript
let numbers = [1, 2, 3, 4, 5];

// forEach - выполняет функцию для каждого элемента массива
numbers.forEach(function(number, index) {
  console.log(`Элемент ${index}: ${number}`);
});

// map - создает новый массив с результатами вызова функции для каждого элемента
let doubled = numbers.map(function(number) {
  return number * 2;
});
console.log(doubled); // [2, 4, 6, 8, 10]

// filter - создает новый массив с элементами, прошедшими проверку
let evenNumbers = numbers.filter(function(number) {
  return number % 2 === 0;
});
console.log(evenNumbers); // [2, 4]

// find - возвращает первый элемент, прошедший проверку
let firstEven = numbers.find(function(number) {
  return number % 2 === 0;
});
console.log(firstEven); // 2

// some - проверяет, удовлетворяет ли хотя бы один элемент условию
let hasEven = numbers.some(function(number) {
  return number % 2 === 0;
});
console.log(hasEven); // true

// every - проверяет, удовлетворяют ли все элементы условию
let allEven = numbers.every(function(number) {
  return number % 2 === 0;
});
console.log(allEven); // false

// reduce - сводит массив к одному значению
let sum = numbers.reduce(function(accumulator, current) {
  return accumulator + current;
}, 0);
console.log(sum); // 15 (1 + 2 + 3 + 4 + 5)

// sort - сортирует элементы массива
let unsortedNumbers = [5, 2, 8, 1, 4];
unsortedNumbers.sort(function(a, b) {
  return a - b; // Для числового сравнения
});
console.log(unsortedNumbers); // [1, 2, 4, 5, 8]
```

### Деструктуризация массивов

```javascript
// Деструктуризация массива
let colors = ["красный", "зеленый", "синий"];
let [red, green, blue] = colors;
console.log(red);   // "красный"
console.log(green); // "зеленый"
console.log(blue);  // "синий"

// Пропуск элементов
let [first, , third] = colors;
console.log(first); // "красный"
console.log(third); // "синий"

// Значения по умолчанию
let [a, b, c, d = "желтый"] = colors;
console.log(d); // "желтый"

// Обмен значениями переменных
let x = 1;
let y = 2;
[x, y] = [y, x];
console.log(x); // 2
console.log(y); // 1

// Остаточные параметры
let [head, ...tail] = [1, 2, 3, 4];
console.log(head); // 1
console.log(tail); // [2, 3, 4]
```

## Функции

Функции в JavaScript - это блоки кода, которые можно вызывать многократно.

### Объявление функций

```javascript
// Объявление функции (Function Declaration)
function greet(name) {
  return `Привет, ${name}!`;
}

// Вызов функции
console.log(greet("Иван")); // "Привет, Иван!"

// Функциональное выражение (Function Expression)
const add = function(a, b) {
  return a + b;
};
console.log(add(5, 3)); // 8

// Стрелочная функция (Arrow Function)
const multiply = (a, b) => a * b;
console.log(multiply(4, 2)); // 8

// Стрелочная функция с блоком кода
const divide = (a, b) => {
  if (b === 0) {
    return "Деление на ноль невозможно";
  }
  return a / b;
};
console.log(divide(10, 2)); // 5
console.log(divide(10, 0)); // "Деление на ноль невозможно"
```

### Параметры функций

```javascript
// Параметры по умолчанию
function greet(name = "Гость") {
  return `Привет, ${name}!`;
}
console.log(greet());        // "Привет, Гость!"
console.log(greet("Иван"));  // "Привет, Иван!"

// Остаточные параметры
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4, 5)); // 15

// Деструктуризация параметров
function printPersonInfo({ name, age, city = "Неизвестно" }) {
  console.log(`${name}, ${age} лет, город: ${city}`);
}
printPersonInfo({ name: "Иван", age: 30 }); // "Иван, 30 лет, город: Неизвестно"
printPersonInfo({ name: "Мария", age: 25, city: "Москва" }); // "Мария, 25 лет, город: Москва"
```

### Область видимости и замыкания

```javascript
// Глобальная и локальная область видимости
let globalVar = "Я глобальная переменная";

function testScope() {
  let localVar = "Я локальная переменная";
  console.log(globalVar); // Доступ к глобальной переменной
  console.log(localVar);  // Доступ к локальной переменной
}

testScope();
// console.log(localVar); // Ошибка! localVar не определена в глобальной области

// Замыкания
function createCounter() {
  let count = 0;
  
  return function() {
    count++;
    return count;
  };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

// Другой пример замыкания
function createGreeting(greeting) {
  return function(name) {
    return `${greeting}, ${name}!`;
  };
}

const sayHello = createGreeting("Привет");
const sayGoodbye = createGreeting("До свидания");

console.log(sayHello("Иван"));    // "Привет, Иван!"
console.log(sayGoodbye("Мария")); // "До свидания, Мария!"
```

### Рекурсия

```javascript
// Рекурсивная функция для вычисления факториала
function factorial(n) {
  // Базовый случай
  if (n === 0 || n === 1) {
    return 1;
  }
  // Рекурсивный случай
  return n * factorial(n - 1);
}

console.log(factorial(5)); // 120 (5 * 4 * 3 * 2 * 1)

// Рекурсивная функция для вычисления чисел Фибоначчи
function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(7)); // 13 (0, 1, 1, 2, 3, 5, 8, 13)
```

### Функции высшего порядка

```javascript
// Функция высшего порядка - принимает или возвращает другие функции
function applyOperation(a, b, operation) {
  return operation(a, b);
}

// Функции для передачи в качестве аргументов
const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;

console.log(applyOperation(5, 3, add));      // 8
console.log(applyOperation(5, 3, subtract)); // 2
console.log(applyOperation(5, 3, multiply)); // 15

// Создание функции с помощью функции высшего порядка
function createMultiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15
```

## Циклы и управление потоком

Циклы позволяют выполнять код многократно, а управление потоком помогает контролировать выполнение программы.

### Цикл for

```javascript
// Базовый цикл for
for (let i = 0; i < 5; i++) {
  console.log(`Итерация ${i}`);
}

// Цикл for для перебора массива
const fruits = ["яблоко", "банан", "апельсин"];
for (let i = 0; i < fruits.length; i++) {
  console.log(`Фрукт ${i + 1}: ${fruits[i]}`);
}

// Цикл for с несколькими переменными
for (let i = 0, j = 10; i < 5; i++, j--) {
  console.log(`i = ${i}, j = ${j}`);
}

// Вложенные циклы
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(`i = ${i}, j = ${j}`);
  }
}
```

### Цикл while и do-while

```javascript
// Цикл while
let i = 0;
while (i < 5) {
  console.log(`while: итерация ${i}`);
  i++;
}

// Цикл do-while (выполняется хотя бы один раз)
let j = 0;
do {
  console.log(`do-while: итерация ${j}`);
  j++;
} while (j < 5);

// Пример с условием, которое изначально ложно
let k = 10;
while (k < 5) {
  console.log("Этот код не выполнится");
}

do {
  console.log("Этот код выполнится один раз");
} while (k < 5);
```

### Циклы for...in и for...of

```javascript
// for...in - для перебора свойств объекта
const person = {
  name: "Иван",
  age: 30,
  city: "Москва"
};

for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}

// for...of - для перебора элементов итерируемых объектов (массивы, строки и т.д.)
const fruits = ["яблоко", "банан", "апельсин"];

for (const fruit of fruits) {
  console.log(fruit);
}

const text = "Привет";
for (const char of text) {
  console.log(char);
}
```

### Управление циклами: break и continue

```javascript
// break - прерывает выполнение цикла
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break; // Выход из цикла при i === 5
  }
  console.log(`break: ${i}`);
}

// continue - пропускает текущую итерацию
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    continue; // Пропускает четные числа
  }
  console.log(`continue: ${i}`);
}

// Использование меток для break и continue
outerLoop: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) {
      break outerLoop; // Прерывает внешний цикл
    }
    console.log(`i = ${i}, j = ${j}`);
  }
}
```

### Обработка ошибок: try...catch

```javascript
// Базовый try...catch
try {
  // Код, который может вызвать ошибку
  console.log(undefinedVariable); // Переменная не определена
} catch (error) {
  // Обработка ошибки
  console.log("Произошла ошибка:", error.message);
}

// try...catch...finally
function divide(a, b) {
  try {
    if (b === 0) {
      throw new Error("Деление на ноль невозможно");
    }
    return a / b;
  } catch (error) {
    console.log("Ошибка:", error.message);
    return null;
  } finally {
    console.log("Операция деления завершена");
  }
}

console.log(divide(10, 2)); // 5
console.log(divide(10, 0)); // null

// Создание собственных ошибок
function validateAge(age) {
  if (age < 0) {
    throw new Error("Возраст не может быть отрицательным");
  }
  if (age > 120) {
    throw new Error("Возраст слишком большой");
  }
  return true;
}

try {
  validateAge(-5);
} catch (error) {
  console.log(error.message); // "Возраст не может быть отрицательным"
}
```

## Объекты

Объекты в JavaScript - это коллекции пар ключ-значение, которые используются для хранения и организации данных.

### Создание объектов

```javascript
// Литерал объекта
const person = {
  name: "Иван",
  age: 30,
  city: "Москва"
};

// Конструктор Object
const user = new Object();
user.name = "Мария";
user.age = 25;
user.city = "Санкт-Петербург";

// Функция-конструктор
function Employee(name, position, salary) {
  this.name = name;
  this.position = position;
  this.salary = salary;
  this.isActive = true;
}

const employee1 = new Employee("Алексей", "Разработчик", 100000);
console.log(employee1); // Employee { name: "Алексей", position: "Разработчик", salary: 100000, isActive: true }

// Object.create()
const personProto = {
  greet: function() {
    return `Привет, меня зовут ${this.name}`;
  }
};

const john = Object.create(personProto);
john.name = "Джон";
console.log(john.greet()); // "Привет, меня зовут Джон"
```

### Доступ к свойствам объекта

```javascript
const person = {
  name: "Иван",
  age: 30,
  "home address": "ул. Ленина, 10"
};

// Через точку (точечная нотация)
console.log(person.name); // "Иван"
console.log(person.age);  // 30

// Через квадратные скобки (скобочная нотация)
console.log(person["name"]); // "Иван"
console.log(person["age"]);  // 30
console.log(person["home address"]); // "ул. Ленина, 10"

// Динамический доступ к свойствам через переменную
const propertyName = "name";
console.log(person[propertyName]); // "Иван"

// Проверка наличия свойства
console.log("name" in person); // true
console.log("job" in person);  // false

// Проверка собственных свойств
console.log(person.hasOwnProperty("name")); // true
```

### Методы объектов

```javascript
// Объект с методами
const calculator = {
  a: 0,
  b: 0,
  
  // Метод как свойство-функция
  add: function() {
    return this.a + this.b;
  },
  
  // Сокращенный синтаксис методов (ES6+)
  multiply() {
    return this.a * this.b;
  },
  
  // Стрелочная функция (не рекомендуется для методов из-за this)
  subtract: () => {
    // this здесь не указывает на calculator!
    return this.a - this.b;
  }
};

calculator.a = 5;
calculator.b = 3;
console.log(calculator.add());      // 8
console.log(calculator.multiply()); // 15
```

### Перебор свойств объекта

```javascript
const person = {
  name: "Иван",
  age: 30,
  city: "Москва",
  job: "Программист"
};

// for...in - перебирает все перечисляемые свойства
for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}

// Object.keys() - возвращает массив ключей
const keys = Object.keys(person);
console.log(keys); // ["name", "age", "city", "job"]

// Перебор с помощью Object.keys() и forEach
Object.keys(person).forEach(key => {
  console.log(`${key}: ${person[key]}`);
});

// Object.values() - возвращает массив значений
const values = Object.values(person);
console.log(values); // ["Иван", 30, "Москва", "Программист"]

// Object.entries() - возвращает массив пар [ключ, значение]
const entries = Object.entries(person);
console.log(entries); // [["name", "Иван"], ["age", 30], ...]

// Перебор с помощью Object.entries() и деструктуризации
Object.entries(person).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});
```

### Копирование и объединение объектов

```javascript
// Копирование по ссылке
const original = { a: 1, b: 2 };
const copy = original; // Обе переменные указывают на один объект
copy.a = 10;
console.log(original.a); // 10 (изменение в copy отразилось в original)

// Поверхностное копирование с Object.assign()
const personCopy = Object.assign({}, person);
personCopy.name = "Петр";
console.log(person.name);     // "Иван" (оригинал не изменился)
console.log(personCopy.name); // "Петр"

// Поверхностное копирование с оператором spread (...)
const anotherCopy = { ...person };
anotherCopy.age = 40;
console.log(person.age);      // 30 (оригинал не изменился)
console.log(anotherCopy.age); // 40

// Объединение объектов
const defaults = { theme: "light", language: "ru" };
const userSettings = { theme: "dark" };
const settings = { ...defaults, ...userSettings };
console.log(settings); // { theme: "dark", language: "ru" }
```

### Деструктуризация объектов

```javascript
const person = {
  name: "Иван",
  age: 30,
  city: "Москва",
  job: "Программист"
};

// Базовая деструктуризация
const { name, age } = person;
console.log(name); // "Иван"
console.log(age);  // 30

// Деструктуризация с переименованием
const { name: userName, age: userAge } = person;
console.log(userName); // "Иван"
console.log(userAge);  // 30

// Деструктуризация с значениями по умолчанию
const { job, salary = 0 } = person;
console.log(job);    // "Программист"
console.log(salary); // 0 (значение по умолчанию)

// Вложенная деструктуризация
const company = {
  name: "ABC Corp",
  address: {
    street: "Ленина 10",
    city: "Москва",
    country: "Россия"
  }
};

const { address: { city: companyCity, country } } = company;
console.log(companyCity); // "Москва"
console.log(country);     // "Россия"
```

### Геттеры и сеттеры

```javascript
const product = {
  name: "Телефон",
  _price: 1000, // Соглашение: префикс _ указывает на "приватное" свойство
  
  // Геттер - вызывается при чтении свойства
  get price() {
    return `$${this._price}`;
  },
  
  // Сеттер - вызывается при записи свойства
  set price(value) {
    if (value < 0) {
      throw new Error("Цена не может быть отрицательной");
    }
    this._price = value;
  }
};

// Использование геттера (выглядит как чтение свойства)
console.log(product.price); // "$1000"

// Использование сеттера (выглядит как запись свойства)
product.price = 1200;
console.log(product.price); // "$1200"

// Валидация в сеттере
try {
  product.price = -100;
} catch (error) {
  console.log(error.message); // "Цена не может быть отрицательной"
}
```

### Прототипное наследование

```javascript
// Создание объекта с прототипом
const animal = {
  eats: true,
  walk() {
    console.log("Животное гуляет");
  }
};

// Object.create создает новый объект с указанным прототипом
const rabbit = Object.create(animal);
rabbit.jumps = true;

// Доступ к унаследованным свойствам
console.log(rabbit.eats);  // true (унаследовано от animal)
console.log(rabbit.jumps); // true (собственное свойство)
rabbit.walk();            // "Животное гуляет" (унаследованный метод)

// Проверка прототипа
console.log(Object.getPrototypeOf(rabbit) === animal); // true

// Изменение прототипа существующего объекта
const longEar = Object.create(rabbit);
longEar.earLength = 10;
console.log(longEar.jumps); // true (унаследовано от rabbit)
console.log(longEar.eats);  // true (унаследовано от animal через rabbit)
```

## Практические упражнения

Для закрепления изученного материала рекомендуется выполнить следующие упражнения:

### Упражнения по основам JavaScript

```javascript
// Упражнение 1: Работа с переменными и типами данных
// Задание: Создайте переменные разных типов и выполните с ними операции

// 1. Создайте переменные разных типов
let name = "Ваше имя";
let age = 25;
let isStudent = true;
let hobbies = ["чтение", "программирование", "спорт"];
let person = { name: name, age: age };

// 2. Выполните операции с этими переменными
// - Сложите строку с числом
// - Сравните число с булевым значением
// - Добавьте элемент в массив
// - Добавьте свойство в объект

// 3. Выведите результаты в консоль
console.log("Результаты операций:");
// Ваш код здесь...

// Упражнение 2: Шаблонные строки
// Задание: Создайте шаблонную строку, включающую переменные и выражения

// 1. Используйте переменные из предыдущего упражнения
// 2. Создайте шаблонную строку, которая включает:
//    - Имя и возраст
//    - Результат математического выражения
//    - Условное выражение

// Ваш код здесь...
```

### Упражнения по массивам

```javascript
// Упражнение 1: Методы массивов
// Задание: Используйте различные методы для работы с массивом

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 1. Создайте новый массив, содержащий только четные числа
// 2. Создайте новый массив, где каждое число умножено на 2
// 3. Найдите сумму всех чисел в массиве
// 4. Проверьте, есть ли в массиве число больше 8
// 5. Найдите индекс первого числа, которое больше 5

// Ваш код здесь...

// Упражнение 2: Сортировка и фильтрация
// Задание: Отсортируйте и отфильтруйте массив объектов

const students = [
  { name: "Анна", grade: 85, year: 2 },
  { name: "Иван", grade: 92, year: 1 },
  { name: "Мария", grade: 78, year: 3 },
  { name: "Петр", grade: 90, year: 2 },
  { name: "Елена", grade: 88, year: 1 }
];

// 1. Отсортируйте студентов по оценке (от высшей к низшей)
// 2. Отфильтруйте студентов первого курса
// 3. Найдите студента с самой высокой оценкой
// 4. Создайте массив, содержащий только имена студентов
// 5. Вычислите среднюю оценку всех студентов

// Ваш код здесь...
```

### Упражнения по функциям

```javascript
// Упражнение 1: Типы функций
// Задание: Создайте функции разных типов и сравните их поведение

// 1. Создайте функцию-объявление (Function Declaration)
function add(a, b) {
  return a + b;
}

// 2. Создайте функциональное выражение (Function Expression)
// Ваш код здесь...

// 3. Создайте стрелочную функцию (Arrow Function)
// Ваш код здесь...

// 4. Сравните их поведение при вызове до объявления
// 5. Сравните их поведение с this (создайте объект с методами)

// Упражнение 2: Замыкания
// Задание: Создайте функцию, использующую замыкание

// 1. Создайте функцию createCounter, которая возвращает функцию-счетчик
// 2. Каждый вызов возвращенной функции должен увеличивать счетчик на 1
// 3. Создайте два разных счетчика и проверьте их независимость

// Ваш код здесь...
```

### Упражнения по циклам и управлению потоком

```javascript
// Упражнение 1: Различные типы циклов
// Задание: Реализуйте одну и ту же задачу с помощью разных циклов

// Задача: Вывести числа от 1 до 10 в консоль

// 1. Используйте цикл for
// Ваш код здесь...

// 2. Используйте цикл while
// Ваш код здесь...

// 3. Используйте цикл do...while
// Ваш код здесь...

// 4. Используйте метод forEach для массива [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Ваш код здесь...

// Упражнение 2: Обработка ошибок
// Задание: Реализуйте функцию с обработкой ошибок

// 1. Создайте функцию divide(a, b), которая делит a на b
// 2. Функция должна выбрасывать ошибку, если b равно 0
// 3. Используйте try...catch для обработки этой ошибки

// Ваш код здесь...
```

### Упражнения по объектам

```javascript
// Упражнение 1: Работа с объектами
// Задание: Создайте и модифицируйте объекты

// 1. Создайте объект, представляющий книгу (title, author, year, isRead)
// 2. Добавьте метод для изменения статуса чтения
// 3. Добавьте метод, возвращающий строку с информацией о книге
// 4. Создайте несколько книг и поместите их в массив библиотеки

// Ваш код здесь...

// Упражнение 2: Прототипное наследование
// Задание: Реализуйте иерархию объектов

// 1. Создайте объект Person с методом introduce()
// 2. Создайте объект Student, наследующий от Person
// 3. Добавьте в Student дополнительные свойства и методы
// 4. Продемонстрируйте наследование методов

// Ваш код здесь...
```

## Проекты для закрепления

Для закрепления изученного материала рекомендуется выполнить несколько практических проектов.

### Мини-проекты

1. **Калькулятор**
   - Создайте простой калькулятор с базовыми операциями
   - Используйте функции, условные операторы и обработку событий
   - Добавьте валидацию ввода и обработку ошибок

2. **Список задач (Todo List)**
   - Создайте приложение для управления списком задач
   - Реализуйте добавление, удаление и отметку выполненных задач
   - Используйте массивы, объекты и методы массивов

3. **Викторина (Quiz)**
   - Создайте простую викторину с вопросами и вариантами ответов
   - Реализуйте подсчет правильных ответов и отображение результата
   - Используйте массивы объектов, функции и условные операторы

### Проект среднего уровня

**Приложение для управления финансами**
- Создайте приложение для отслеживания доходов и расходов
- Реализуйте добавление, удаление и редактирование транзакций
- Добавьте категории транзакций и фильтрацию
- Реализуйте визуализацию данных (графики, диаграммы)
- Добавьте сохранение данных в localStorage

## Ресурсы для дальнейшего изучения

### Книги
1. "JavaScript: The Good Parts" - Douglas Crockford
2. "Eloquent JavaScript" - Marijn Haverbeke
3. "You Don't Know JS" - Kyle Simpson
4. "JavaScript: The Definitive Guide" - David Flanagan

### Онлайн-курсы
1. [JavaScript.info](https://javascript.info/) - современный учебник по JavaScript
2. [MDN Web Docs](https://developer.mozilla.org/ru/docs/Web/JavaScript) - документация и руководства
3. [freeCodeCamp](https://www.freecodecamp.org/) - интерактивные уроки и проекты
4. [Codecademy](https://www.codecademy.com/learn/introduction-to-javascript) - интерактивные курсы

### YouTube-каналы
1. [Traversy Media](https://www.youtube.com/user/TechGuyWeb)
2. [The Net Ninja](https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg)
3. [Fun Fun Function](https://www.youtube.com/channel/UCO1cgjhGzsSYb1rsB4bFe4Q)
4. [Academind](https://www.youtube.com/channel/UCSJbGtTlrDami-tDGPUV9-w)

### Инструменты для практики
1. [CodePen](https://codepen.io/) - онлайн-редактор для HTML, CSS и JavaScript
2. [JSFiddle](https://jsfiddle.net/) - онлайн-среда для тестирования кода
3. [CodeSandbox](https://codesandbox.io/) - онлайн-редактор для создания проектов
4. [LeetCode](https://leetcode.com/) - платформа для решения алгоритмических задач
