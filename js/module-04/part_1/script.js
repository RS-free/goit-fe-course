'use strict'

// function first(callback) {
//     console.log(1)
//     callback()
// }

// function second() {
//     console.log(2)
// }

// first(() => {
//     return second(2, 2)
// });

// const map = function (arr, callback) {
//     const newMass = [];
//     for (const key of arr) {
//         const result = callback(key)
//         newMass.push(result);    
//     }
//     return newMas;
// }

// const minus = a => a - 5;
// const numbers = [1, 3, 5, 7, 9, 11];

// const newMap = map(numbers, minus);
// console.log(newMap);


//замыкания
// function fn() {
//     let counter = 0;

//     function increment() {
//         console.log(counter);
//         counter ++;
//     }
//     return increment;
// }

// const newFn = fn();

// newFn();
// newFn();
// newFn();
// newFn();
// newFn();
// console.log('--------------');
// const newFn2 = fn();
// newFn();
// newFn();
// newFn();
// newFn();


//MODULE-04

// const about = {
//     name: 'Name',
//     age: '30',
//     lastName: 'SurName',
//     isActive: {
//         run: true
//     }
// }
// //console.log(about);
// //console.log(about.name);
// //console.log(about.lastName);

// about.name = 'Name2';
// about.height = 200;
// // console.log(about);
// // console.log(about.isActive.run); //true
// // console.log(about['name']); //Name2

// // delete about.name
// // console.log(about); //выведет все, кроме удаленного имени

// const showUser = (a, num) => about[a] >= num? console.log('ok'): console.log('Ne ok')
// showUser('height', 300); 

// let name2 = 'Name';
// let age = 30;
// let lastName = 'SurName';
// let isActive = true;

// const about = {
//     name2,
//     age,
//     lastName,
//     isActive,
//     show(){
//         return about.age +10;
//     }
//     showHeight: function(){
//         return about.height -11;
//     }
// }

// about.name = 'Name2';
// about.height = 200;

// console.log(about.show());

//------------------------
//====================== task01 ==================
//  Выведите на экран зарплату Пети и Коли.
var obj = {Коля: '1000', Вася: '500', Петя: '200'};
//1 вариант
console.log(obj['Коля']);
console.log(obj['Петя']);
//2 вариант
console.log (obj.Коля);
console.log (obj.Петя);
//====================== task02 ==================
// Дан многомерный массив arr:
var arr = {
	'ru':['голубой', 'красный', 'зеленый'],
	'en':['blue', 'red', 'green'],
}
// Выведите с его помощью слово 'голубой'.
console.log(arr['ru'][0]); //голубой
//====================== task03 ==================
// Создайте объект obj. Выведите на экран элемент с ключом 'c' двумя способами: 
//через квадратные скобки и как свойство объекта:
var obj = {a: 1, b: 2, c: 3};
console.log(obj.c);
console.log(obj['c']);
//====================== task04 ==================
// Создайте объект с днями недели. Ключами в нем должны служить номера дней от начала недели 
//(понедельник - первый и т.д.). Выведите на экран текущий день недели.
var weekNum ={1: 'Monday', 2: 'Tuesday', 3: 'Wednesday', 4: 'Thuesday', 5: 'Friday', 6: 'Saturday', 7: 'Sunday'};
//1 вариант
console.log(weekNum[1]);
//====================== task05 ==================
// Пусть теперь номер дня недели хранится в переменной day, например там лежит число 3. 
//Выведите день недели, соответствующий значению переменной day.
let day = 1;
console.log(weekNum[day]);
//====================== task06 ==================
// Создайте двухмерный массив. Первые два ключа - это 'ru' и 'en'. Пусть первый ключ содержит элемент, 
//являющийся массивом названий дней недели по-русски, а второй - по-английски. Выведите с помощью этого 
//массива понедельник по-русски и среду по английски (пусть понедельник - это нулевой день)9
var arr2 = {
	'ru':['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
	'en':['Monday', 'Tuesday', 'Wednesday', 'Thuesday', 'Friday', 'Saturday', 'Sunday'],
};
console.log(arr2['ru'][0]);
console.log(arr2['en'][2]);
//====================== task07 ==================
// Пусть теперь в переменной lang хранится язык (она принимает одно из значений или 'ru', или 'en' - либо то, либо то), 
//а в переменной day - номер дня. Выведите словом день недели, соответствующий переменным lang и day. То есть: если, 
//к примеру, lang = 'ru' и day = 3 - то выведем 'среда'.
var lang2 = 'ru';
var day2 = 3;
console.log(arr2[lang2][day2]);
//====================== task08 ==================
/* Напиши скрипт, который, для объекта user, последовательно: 
    - добавляет поле mood со значением 'happy'
    - заменяет значение hobby на 'javascript'
    - заменяет значение premium на false
    - выводит содержимое объекта user в формате ключ:значение 
      используя Object.keys и for...of
    - выводит содержимое объекта user в формате ключ:значение 
      используя Object.entries и for...of
*/

const user = {
    name: "Mango",
    age: 20,
    hobby: "html",
    premium: true
  };
  

// //====================== task09 ==================

// /*
//   Напиши скрипт который определит и выведет в консоль 
//   имя сотрудника который выполнил больше всех задач.

//   Сотрудники и кол-во выполненых задач содержатся 
//   как свойства объекта в формате "имя":"кол-во задач"
// */

// const tasksCompleted = {
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99
//   };
  

// //====================== task10 ==================

// /*  
//   Напиши функцию countProps(obj), считающую кол-во свойств в объекте.
//   Функция возвращает количество свойств.
// */

// // Вызовы функции для проверки
// console.log(
//     countProps({})
//   ); // 0
  
//   console.log(
//     countProps({a: 1, b: 3, c: 'hello'})
//   ); // 3

// //====================== task11 ==================

// /*  
//   Напиши функцию isObjectEmpty(obj), которая получает 
//   один аргумент obj - объект, и проверяет пуст ли он (есть ли в нем свойства).
  
//   Возвращает true если объект пустой, false если не пустой.
// */

// // Вызовы функции для проверки
// console.log(
//     isObjectEmpty({})
//   ); // true
  
//   console.log(
//     isObjectEmpty({a: 1})
//   ); // false
  
//   console.log(
//     isObjectEmpty({a: 1, b: 2})
//   ); // false
  

// //====================== task12 ==================

// /*  
//   Напиши функцию isObjectEmpty(obj), которая получает 
//   один аргумент obj - объект, и проверяет пуст ли он (есть ли в нем свойства).
  
//   Возвращает true если объект пустой, false если не пустой.
// */

// // Вызовы функции для проверки
// console.log(
//     isObjectEmpty({})
//   ); // true
  
//   console.log(
//     isObjectEmpty({a: 1})
//   ); // false
  
//   console.log(
//     isObjectEmpty({a: 1, b: 2})
//   ); // false
  




//   //====================== task13 ==================

// /*  
//   Напиши функцию countTotalSalary(salaries). 
  
//   Функция получает объект зарплат и считает общую сумму запрплаты работников.
//   Возвращает общую сумму зарплаты.
  
//   Каждое поле объекта, передаваемого в функцию, имеет вид "имя":"зарплата"
// */

// // Вызовы функции для проверки
// console.log(
//     countTotalSalary({})
//   ); // 0
  
//   console.log(
//     countTotalSalary({
//       mango: 100,
//       poly: 150,
//       alfred: 80
//     })
//   ); // 330
  
  
//   //====================== task14 ==================

// /*  
//   Напиши функцию getAllPropValues(arr, prop), 
//   которая получает массив объектов и имя ключа. 
//   Возвращает массив значений определенного поля prop
//   из каждого объекта в массиве
// */

// const users = [
//     { name: 'Poly', age: 7, mood: 'happy' },
//     { name: 'Mango', age: 4, mood: 'blissful'},
//     { name: 'Ajax', age: 3, mood: 'tired' }
//   ];
  
//   // Вызовы функции для проверки
//   console.log(
//     getAllPropValues(users, 'name')
//   ); // ['Poly', 'Mango', 'Ajax']
  
//   console.log(
//     getAllPropValues(users, 'mood')
//   ); // ['happy', 'blissful', 'tired']
  
//   console.log(
//     getAllPropValues(users, 'active')
//   ); // []

// //====================== task15 ==================

//     /*  
//  * Расставь отсутствующие this в методах объекта account
// */

// const account = {
//     owner: "Mango",
//     balance: 24000,
//     discount: 0.1,
//     orders: ["order-1", "order-2", "order-3"],
//     changeDiscount(value) {
//       discount = value;
//     },
//     getOrders() {
//       return orders;
//     },
//     addOrder(cost, order) {
//       balance -= cost;
//       orders.push(order);
//     }
//   };
  
//   account.changeDiscount(0.15);
//   console.log(account.discount); // 0.15
  
//   const orders = account.getOrders();
//   console.log(orders); // ['order-1', 'order-2', 'order-3']
  
//   account.addOrder(5000, "order-4");
//   console.log(account.balance); // 19000
//   console.log(account.orders); // ['order-1', 'order-2', 'order-3', 'order-4']
  
// Collapse



// Message Input


// Message #random