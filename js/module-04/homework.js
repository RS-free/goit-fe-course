"use strict";
// /*
//   Создайте скрипт кассира, который получает список продуктов и деньги,
//   подсчитывает общую стоимость продуктов, и в зависимости от того хватает
//   денег или нет, уведомляет покупателя о результате.
// */

// /* Есть база данных товаров, в формате "имя-товара":"цена за одну единицу" */

// const products = {
//   bread: 10,
//   milk: 15,
//   apples: 20,
//   chicken: 50,
//   cheese: 40
// };

// /*
//     Необходимо создать функцию-конструктор Cashier.

//     Поля будущего объекта кассира (🔔 объявляются как this.имя_поля в конструкторе):
//       - name - строка, имя кассира, передается при вызове конструктора

//       - productDatabase - объект база данных продуктов, передается при вызове конструктора

//       - customerMoney - число, сумма введенная пользователем при запросе денег, всегда начинается с 0

//       - setCustomerMoney(value) - метод, получает число, деньги покупателя, и записывает его в поле customerMoney.

//       - countTotalPrice(order) - метод, получает объект списока покупок, считает общую стоимость покупок.
//         🔔 Ключи объекта order есть в объекте productDatabase. Из order берем количество единиц продукта,
//            а из productDatbase цену за одну штуку и умножаем, так получаем цену одного типа продукта в заказе.
//            Чтобы посчитать цену для всех продуктов заказа используйте цикл, перебрав все ключи order.

//       - countChange(totalPrice) - метод, считает сдачу, разницу между общей суммой покупок и деньгами покупателя.
//           * Обязательно проверьте что customerMoney не меньше чем значение totalPrice
//           * Если денег было передано достаточно, возвращает разницу денег.
//           * Если в customerMoney меньше денег чем в totalPrice, возвращает null

//       - onSuccess(change) - метод, выводит в консоль строку `Спасибо за покупку, ваша сдача ${change}!`.

//       - onError() - метод, выводит в консоль строку 'Очень жаль, вам не хватает денег на покупки'

//       - reset() - метод, сбрасывает поле customerMoney 0.
//   */

// function Cashier(name, productDatabase) {
//   // 🔔 не забывайте о this при обращении к свойствам и методам будущего объекта
//   this.name = name;
//   this.productDatabase = productDatabase;
//   this.totalPrice = 0;
//   this.customerMoney = 0;
//   this.changeAmout = 0;

//   this.countTotalPrice = function(order) {
//     for (let item in order) {
//       this.totalPrice += order[item] * this.productDatabase[item];
//     }
//     return this.totalPrice;
//   };
//   this.setCustomerMoney = function(value) {
//     this.customerMoney = value;
//   };
//   this.countChange = function() {
//     if (this.totalPrice > this.customerMoney) {
//       return null;
//     }
//     this.changeAmout = this.customerMoney - this.totalPrice;
//     return this.changeAmout;
//   };
//   this.reset = function() {
//     this.totalPrice = 0;
//     this.customerMoney = 0;
//     this.changeAmout = 0;
//   };
//   this.transaction = function(order, money) {
//     const greet = function(obj) {
//       console.log(`Hello "${obj.name}" serves you`);
//       return obj.name;
//     };
//     const onSuccess = function(obj) {
//       if (obj.changeAmout > 0) {
//         console.log(
//           `Thank you for your purchase, your change is "${obj.changeAmout}"`
//         );
//         if (obj.changeAmout === 0) {
//           console.log(`Thank you for your purchase!`);
//         }
//         return obj.changeAmout;
//       }
//       const onError = function() {
//         console.log(`Sorry but your money is not enough ((`);
//       };
//       console.log(`Cashier:`, this.name);
//       console.log(
//         `totalPrice = ${this.totalPrice}, customerMoney = ${
//           this.customerMoney
//         }, changeAmount = ${this.changeAmout}`
//       );
//       greet(this);
//       console.log(`Your order:`, order);
//       this.countTotalPrice(order);
//       console.log(`Total prica is:`, this.totalPrice);
//       this.setCustomerMoney(money);
//       console.log(`We get money:`, this.customerMoney);
//       const result = this.countChange();
//       console.log(`Change:`, result);
//       if (result !== null) {
//         onSuccess(this);
//       } else {
//         onError();
//       }
//       this.reset();
//       console.log(
//         `totalPrice = ${this.totalPrice}, customerMoney = ${
//           this.customerMoney
//         }, changeAmount = ${this.changeAmout}`
//       );
//       return result;
//     };
//   };
// }

// /* Заказ пользователя хранится в виде объекта следующего формата. "имя-продукта":"количество-единиц" */
// const order = {
//   bread: 2,
//   milk: 2,
//   apples: 1,
//   cheese: 1
// };

// /* Пример использования */
// const mango = new Cashier("Mango", products);

// // Проверяем исходные значения полей
// console.log(mango.name); // Mango
// console.log(mango.productDatabase); // ссылка на базу данных продуктов (объект products)
// console.log(mango.customerMoney); // 0

// // Вызываем метод countTotalPrice для подсчета общей суммы
// // передавая order - список покупок пользователя
// const totalPrice = mango.countTotalPrice(order);

// // Проверям что посчитали
// console.log(totalPrice); // 110

// // Вызываем setCustomerMoney для запроса денег покупателя
// mango.setCustomerMoney(300);

// // Проверяем что в поле с деньгами пользователя
// console.log(mango.customerMoney); // 300

// // Вызываем countChange для подсчета сдачи
// const change = mango.countChange();

// // Проверяем что нам вернул countChange
// console.log(change); // 190

// // // Проверяем результат подсчета денег
// // if (change !== null) {
// //   // При успешном обслуживании вызываем метод onSuccess
// //   mango.onSuccess(change); // Спасибо за покупку, ваша сдача 190
// // } else {
// //   // При неудачном обслуживании вызываем метод onError
// //   mango.onError(); // Очень жаль, вам не хватает денег на покупки
// // }

// // Вызываем reset при любом исходе обслуживания
// mango.reset();

// // Проверяем значения после reset
// console.log(mango.customerMoney); // 0
//******* */
// // Напиши скрипт, который, для объекта user, последовательно:
//   const user = {
//     name: "Mango",
//     age: 20,
//     hobby: "html",
//     premium: true
//   };
// // добавляет поле mood со значением 'happy'
// user.mood = "happy";
// console.log(user);
// // заменяет значение hobby на 'javascript'
// user.hobby = "javascript";
// console.log(user);
// // заменяет значение premium на false
// user.premium = false;
// console.log(user);
// // выводит содержимое объекта user в формате ключ:значение
// // используя Object.keys и for...of
// const keys = Object.keys(user);
// for (const key of keys) {
//   console.log("value: ", user[key]);
// }
// // выводит содержимое объекта user в формате ключ:значение
// // используя Object.entries и for...of
// const entries = Object.entries(user);
// // console.log(entries);
// for (const entry of entries) {
//   const key = entry[0];
//   const value = entry[1];

//   console.log(`${key}: ${value}`);
// }

// /*
//   Напиши скрипт который определит и выведет в консоль
//   имя сотрудника который выполнил больше всех задач.

//   Сотрудники и кол-во выполненых задач содержатся
//   как свойства объекта в формате "имя":"кол-во задач"
// */

// const tasksCompleted = {
//   ann: 29,
//   david: 35,
//   helen: 1,
//   lorence: 99
// };
// let maxValue = 0;
// let keyVal;
// for (const key in tasksCompleted) {
//   let tempValue = parseFloat(tasksCompleted[key]);
//   if (maxValue < tempValue) {
//     maxValue = tempValue;
//     keyVal = key;
//   }
// }
// console.log(keyVal);

// /*
//   Напиши функцию countProps(obj), считающую кол-во свойств в объекте.
//   Функция возвращает количество свойств.
// */

// function countProps(obj) {
//   let count = 0;

//   for (let prop in obj) {
//     if (obj.hasOwnProperty(prop)) ++count;
//   }
//   return count;
// }
// // Вызовы функции для проверки
// console.log(countProps({})); // 0

// console.log(countProps({ a: 1, b: 3, c: "hello" })); // 3

// /*
//   Напиши функцию isObjectEmpty(obj), которая получает
//   один аргумент obj - объект, и проверяет пуст ли он (есть ли в нем свойства).

//   Возвращает true если объект пустой, false если не пустой.
// */

// function isObjectEmpty(obj) {
//   for (let prop in obj) {
//     if (Object.prototype.hasOwnProperty.call(obj, prop)) {
//       return false;
//     }
//   }
//   return true;
// }
// // Вызовы функции для проверки
// console.log(isObjectEmpty({})); // true

// console.log(isObjectEmpty({ a: 1 })); // false

// console.log(isObjectEmpty({ a: 1, b: 2 })); // false

// /*
//   Напиши функцию countTotalSalary(salaries).
//   Функция получает объект зарплат и считает общую сумму запрплаты работников.
//   Возвращает общую сумму зарплаты.
//   Каждое поле объекта, передаваемого в функцию, имеет вид "имя":"зарплата"
// */

// function countTotalSalary(salaries) {
//   let sum = 0;
//   for (let el in salaries) {
//     if (salaries.hasOwnProperty(el)) {
//       sum += parseFloat(salaries[el]);
//     }
//   }
//   return sum;
// }

// // Вызовы функции для проверки
// console.log(countTotalSalary({})); // 0

// console.log(
//   countTotalSalary({
//     mango: 100,
//     poly: 150,
//     alfred: 80
//   })
// ); // 330

/*  
  Напиши функцию getAllPropValues(arr, prop), 
  которая получает массив объектов и имя ключа. 
  Возвращает массив значений определенного поля prop
  из каждого объекта в массиве
*/

// const users = [
//   { name: "Poly", age: 7, mood: "happy" },
//   { name: "Mango", age: 4, mood: "blissful" },
//   { name: "Ajax", age: 3, mood: "tired" }
// ];

// function getAllPropValues(arr, prop) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; ++i) newArr.push(arr[i][prop]);
//   return newArr;
// }
// // Вызовы функции для проверки
// console.log(getAllPropValues(users, "name")); // ['Poly', 'Mango', 'Ajax']

// console.log(getAllPropValues(users, "mood")); // ['happy', 'blissful', 'tired']

// console.log(getAllPropValues(users, "active")); // []

// /*
//  * Расставь отсутствующие this в методах объекта account
//  */

// const account = {
//   owner: "Mango",
//   balance: 24000,
//   discount: 0.1,
//   orders: ["order-1", "order-2", "order-3"],
//   changeDiscount(value) {
//     this.discount = value;
//   },
//   getOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost;
//     this.orders.push(order);
//   }
// };

// account.changeDiscount(0.15);
// console.log(account.discount); // 0.15

// const orders = account.getOrders();
// console.log(orders); // ['order-1', 'order-2', 'order-3']

// account.addOrder(5000, "order-4");
// console.log(account.balance); // 19000
// console.log(account.orders); // ['order-1', 'order-2', 'order-3', 'order-4']

// /*
//  * Расставь отсутствующие this в конструкторе Account
//  */

// function Account(login, password, type = "regular") {
//   this.login = login;
//   this.password = password;
//   this.type = type;

//   this.changePassword = function(newPassword) {
//     this.password = newPassword;
//   };

//   this.getInfo = function() {
//     console.log(`
//       Login: ${login},
//       Pass: ${password},
//       Type: ${type}
//     `);
//   };
// }

// const account = new Account("Mango", "qwe123", "premium");

// console.log(account.login); // 'Mango'
// console.log(account.password); // 'qwe123'
// console.log(account.type); // 'premium'

// account.changePassword("asdzxc");
// console.log(account.password); // 'asdzxc'

// account.getInfo(); // Login: 'Mango', Pass: 'asdzxc', Type: 'premium'

/*  
  Напиши функцию-конструкор User для создания 
  пользователя со следующим свойствами:
    - name - строка (имя)
    - age - число (возраст)
    - friends - число (кол-во друзей)

  Имя, активность, возраст и друзей, 
  будут переданы при вызове конструктора User.
  
  Добавь метод getInfo(), который, выводит строку:
  `User ${имя} is ${возраст} years old and has ${кол-во друзей} friends`
*/
function User({ name = "default", age = "0", friends = "0" }) {
  this.name = name;
  this.age = age;
  this.friends = friends;
  this.getInfo = function() {
    // return `User ${name} is ${age} years old and has ${friends} friends`;
    console.log(`User ${name} is ${age} years old and has ${friends} friends`);
  };
}
const mango = new User({ name: "Mango", age: 2, friends: 20 });
mango.getInfo(); // User Mango is 2 years old and has 20 friends

const poly = new User({ name: "Poly", age: 3, friends: 17 });
poly.getInfo(); // User Poly is 3 years old and has 17 friends
