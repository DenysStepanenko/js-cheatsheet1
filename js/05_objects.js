// ===== ОБЪЕКТЫ В JAVASCRIPT =====

// === Создание объектов ===

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

// Метод Object.create()
const personProto = {
  greet: function() {
    return `Привет, меня зовут ${this.name}`;
  }
};

const john = Object.create(personProto);
john.name = "Джон";
console.log(john.greet()); // "Привет, меня зовут Джон"

// === Доступ к свойствам объекта ===

// Через точку
console.log(person.name); // "Иван"
console.log(person.age);  // 30

// Через квадратные скобки
console.log(person["name"]); // "Иван"
console.log(person["age"]);  // 30

// Динамический доступ к свойствам
const propertyName = "city";
console.log(person[propertyName]); // "Москва"

// Проверка наличия свойства
console.log("name" in person); // true
console.log("job" in person);  // false

// Проверка собственных свойств
console.log(person.hasOwnProperty("name")); // true
console.log(john.hasOwnProperty("greet"));  // false (унаследовано)

// === Изменение объектов ===

// Добавление свойств
person.job = "Программист";
person["salary"] = 100000;

// Изменение свойств
person.age = 31;
person["city"] = "Казань";

// Удаление свойств
delete person.salary;
console.log(person.salary); // undefined

// === Методы объектов ===

// Добавление методов
person.greet = function() {
  return `Привет, меня зовут ${this.name}`;
};

console.log(person.greet()); // "Привет, меня зовут Иван"

// Сокращенный синтаксис методов (ES6+)
const calculator = {
  a: 0,
  b: 0,
  
  // Сокращенный синтаксис
  add() {
    return this.a + this.b;
  },
  
  multiply() {
    return this.a * this.b;
  }
};

calculator.a = 5;
calculator.b = 3;
console.log(calculator.add());      // 8
console.log(calculator.multiply()); // 15

// === Перебор свойств объекта ===

// for...in
for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}

// Object.keys() - возвращает массив ключей
const keys = Object.keys(person);
console.log(keys); // ["name", "age", "city", "job", "greet"]

// Object.values() - возвращает массив значений
const values = Object.values(person);
console.log(values); // ["Иван", 31, "Казань", "Программист", function]

// Object.entries() - возвращает массив пар [ключ, значение]
const entries = Object.entries(person);
console.log(entries); // [["name", "Иван"], ["age", 31], ...]

// Перебор с помощью forEach
Object.keys(person).forEach(key => {
  console.log(`${key}: ${person[key]}`);
});

// === Копирование и объединение объектов ===

// Поверхностное копирование с Object.assign()
const personCopy = Object.assign({}, person);
personCopy.name = "Петр";
console.log(person.name);     // "Иван" (оригинал не изменился)
console.log(personCopy.name); // "Петр"

// Поверхностное копирование с оператором spread (...)
const anotherCopy = { ...person };
anotherCopy.age = 40;
console.log(person.age);      // 31 (оригинал не изменился)
console.log(anotherCopy.age); // 40

// Объединение объектов
const defaults = { theme: "light", language: "ru" };
const userSettings = { theme: "dark" };
const settings = { ...defaults, ...userSettings };
console.log(settings); // { theme: "dark", language: "ru" }

// === Деструктуризация объектов ===

// Базовая деструктуризация
const { name, age } = person;
console.log(name); // "Иван"
console.log(age);  // 31

// Деструктуризация с переименованием
const { name: userName, age: userAge } = person;
console.log(userName); // "Иван"
console.log(userAge);  // 31

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

// === Методы Object ===

// Object.keys() - массив ключей
console.log(Object.keys(person));

// Object.values() - массив значений
console.log(Object.values(person));

// Object.entries() - массив пар [ключ, значение]
console.log(Object.entries(person));

// Object.fromEntries() - создает объект из массива пар [ключ, значение]
const personEntries = [["name", "Иван"], ["age", 31]];
const newPerson = Object.fromEntries(personEntries);
console.log(newPerson); // { name: "Иван", age: 31 }

// Object.freeze() - замораживает объект (запрещает изменения)
const frozenObj = Object.freeze({ x: 1, y: 2 });
frozenObj.x = 10; // Не сработает в строгом режиме
console.log(frozenObj.x); // 1 (не изменилось)

// Object.seal() - запечатывает объект (запрещает добавление/удаление свойств)
const sealedObj = Object.seal({ x: 1, y: 2 });
sealedObj.x = 10;     // Сработает
sealedObj.z = 3;      // Не сработает
delete sealedObj.y;   // Не сработает
console.log(sealedObj); // { x: 10, y: 2 }

// === Геттеры и сеттеры ===

const product = {
  name: "Телефон",
  _price: 1000,
  
  // Геттер
  get price() {
    return `$${this._price}`;
  },
  
  // Сеттер
  set price(value) {
    if (value < 0) {
      throw new Error("Цена не может быть отрицательной");
    }
    this._price = value;
  }
};

console.log(product.price); // "$1000"
product.price = 1200;
console.log(product.price); // "$1200"

// Попытка установить отрицательную цену вызовет ошибку
// product.price = -100; // Error: Цена не может быть отрицательной

// === Прототипное наследование ===

// Создание объекта с прототипом
const animal = {
  eats: true,
  walk() {
    console.log("Животное гуляет");
  }
};

const rabbit = Object.create(animal);
rabbit.jumps = true;

console.log(rabbit.eats);  // true (унаследовано)
console.log(rabbit.jumps); // true (собственное свойство)
rabbit.walk();            // "Животное гуляет" (унаследованный метод)

// Проверка прототипа
console.log(Object.getPrototypeOf(rabbit) === animal); // true

// Изменение прототипа
const longEar = Object.create(rabbit);
longEar.earLength = 10;
console.log(longEar.jumps); // true (унаследовано от rabbit)
console.log(longEar.eats);  // true (унаследовано от animal через rabbit)

// Цепочка прототипов
console.log(longEar.__proto__ === rabbit);         // true
console.log(longEar.__proto__.__proto__ === animal); // true
