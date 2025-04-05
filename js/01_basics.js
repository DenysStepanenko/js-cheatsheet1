// ===== ОСНОВЫ JAVASCRIPT =====

// === Переменные и типы данных ===

// Объявление переменных
let message = "Привет"; // переменная, значение может меняться
const PI = 3.14;        // константа, значение не может быть изменено
var oldWay = "Устаревший способ"; // устаревший способ объявления переменных

// Основные типы данных
let string = "Это строка";              // Строка (String)
let number = 42;                        // Число (Number)
let bigInt = 9007199254740991n;         // BigInt для очень больших чисел
let boolean = true;                     // Логический тип (Boolean): true или false
let nullValue = null;                   // Null - специальное значение "ничего"
let undefinedValue;                     // Undefined - значение не присвоено
let object = { name: "John", age: 30 }; // Объект (Object)
let array = [1, 2, 3];                  // Массив (Array) - особый тип объекта
let func = function() { return "Hi"; }; // Функция - тоже объект

// Проверка типа
console.log(typeof string);      // "string"
console.log(typeof number);      // "number"
console.log(typeof boolean);     // "boolean"
console.log(typeof nullValue);   // "object" (это ошибка в JavaScript)
console.log(typeof undefinedValue); // "undefined"
console.log(typeof object);      // "object"
console.log(typeof array);       // "object" (массивы - это объекты)
console.log(typeof func);        // "function"

// === Операторы ===

// Арифметические операторы
let sum = 5 + 3;        // 8 (сложение)
let difference = 5 - 3;  // 2 (вычитание)
let product = 5 * 3;     // 15 (умножение)
let quotient = 5 / 3;    // 1.6666... (деление)
let remainder = 5 % 3;   // 2 (остаток от деления)
let power = 5 ** 3;      // 125 (возведение в степень)

// Операторы сравнения
console.log(5 > 3);      // true (больше)
console.log(5 < 3);      // false (меньше)
console.log(5 >= 5);     // true (больше или равно)
console.log(5 <= 3);     // false (меньше или равно)
console.log(5 == "5");   // true (равно с приведением типов)
console.log(5 === "5");  // false (строго равно, без приведения типов)
console.log(5 != "5");   // false (не равно с приведением типов)
console.log(5 !== "5");  // true (строго не равно)

// Логические операторы
console.log(true && false); // false (логическое И)
console.log(true || false); // true (логическое ИЛИ)
console.log(!true);         // false (логическое НЕ)

// Инкремент и декремент
let i = 5;
console.log(i++);  // 5 (постфиксный инкремент: возвращает, потом увеличивает)
console.log(i);    // 6
console.log(++i);  // 7 (префиксный инкремент: увеличивает, потом возвращает)
console.log(i--);  // 7 (постфиксный декремент: возвращает, потом уменьшает)
console.log(i);    // 6
console.log(--i);  // 5 (префиксный декремент: уменьшает, потом возвращает)

// === Строки и шаблонные строки ===

// Конкатенация строк
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName; // "John Doe"

// Шаблонные строки (template literals)
let greeting = `Привет, ${firstName} ${lastName}!`; // "Привет, John Doe!"
let calculation = `2 + 2 = ${2 + 2}`; // "2 + 2 = 4"

// Многострочные шаблонные строки
let multiline = `Это первая строка.
Это вторая строка.
А это третья строка.`;

// Методы строк
let text = "Привет, мир!";
console.log(text.length);            // 12 (длина строки)
console.log(text.toUpperCase());     // "ПРИВЕТ, МИР!" (верхний регистр)
console.log(text.toLowerCase());     // "привет, мир!" (нижний регистр)
console.log(text.indexOf("мир"));    // 8 (позиция подстроки)
console.log(text.includes("мир"));   // true (содержит ли подстроку)
console.log(text.startsWith("Привет")); // true (начинается ли с подстроки)
console.log(text.endsWith("!"));     // true (заканчивается ли подстрокой)
console.log(text.slice(8, 11));      // "мир" (извлечение подстроки)
console.log(text.replace("мир", "JavaScript")); // "Привет, JavaScript!"
console.log(text.split(", "));       // ["Привет", "мир!"] (разбиение на массив)

// === Условные конструкции ===

// if-else
let age = 18;
if (age >= 18) {
  console.log("Вы совершеннолетний");
} else {
  console.log("Вы несовершеннолетний");
}

// if-else if-else
let score = 85;
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
let status = age >= 18 ? "Взрослый" : "Ребенок";
console.log(status); // "Взрослый"

// switch
let day = 2;
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

// === Преобразование типов ===

// Строковое преобразование
let num = 42;
let str = String(num); // "42"
let str2 = num + "";   // "42" (неявное преобразование)

// Числовое преобразование
let str3 = "42";
let num2 = Number(str3);   // 42
let num3 = +str3;          // 42 (сокращенный синтаксис)
let num4 = parseInt(str3); // 42 (целое число)
let num5 = parseFloat("42.5"); // 42.5 (с плавающей точкой)

// Логическое преобразование
let bool1 = Boolean(1);     // true
let bool2 = Boolean(0);     // false
let bool3 = Boolean("");    // false
let bool4 = Boolean("text"); // true
let bool5 = Boolean(null);  // false
let bool6 = Boolean(undefined); // false

// Сокращенное логическое преобразование
let bool7 = !!1;  // true
let bool8 = !!0;  // false
