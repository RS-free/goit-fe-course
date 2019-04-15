'use strict'

// const petya = {
//     name: 'Petya',
//     showName() {
//       console.log(petya.name);
//     }
//   };
  
//   petya.showName();

//   const maxim = {
//     name2: 'Maxim',
//     showName() {
//       console.log(this.name2);
//     }
//   };
  
//   maxim.showName();

//   function fn() {
//       return `hello ${this.name3}`
//   }

//   const itsMe = {
//       name3: 'Pupsik'
//   }

//   itsMe.showMe = fn;

//   console.log(itsMe.showMe());

//   const newFn = () => console.log(this);
//   newFn(); //Window {postMessage: f, blur: f, focus: f, close: f, parent: Window, ...}


// function Sales(name, sale = 0, change = 10) {
//     const default2 = 6;
//     this.name = name;
//     this.sale = sale;
//     this.change = change;
//     this.plus = function(product) {
//         this.sale += 1;
//         this.change -= 1;
//         console.log(`----->${product}<-----`)
//         //return this.product = this.product;
//     }
//     this.alarm = function() {
//         if(this.change < default2) {
//             alert('alarm')
//         }
//     }
// }
// const margo = new Sales('Margo');
// margo.plus('iron');
// margo.plus('tv');
// margo.plus('tv'); 
// margo.plus('tv');
// margo.plus('tv');
// margo.plus('tv');

// margo.alarm();
// console.log(margo);


// const arr = [1, 2, 3, 4, 5];
// console.log(arr[2]);

// const x = (str) => { str = "A string!"; }
// const x = () => "A string!";
const x = (str) => { "A string!"; };

console.log(x);


//====================== task16 ==================
/*  
  Напиши функцию-конструкор User для создания 
  пользователя со следующим свойствами:
    - name - строка (имя)
    - age - число (возраст)
    - friends - число (кол-во друзей)

  Имя, активность, возраст и друзей, 
  будут переданы при вызове конструктора User.
  
  Добавь метод getInfo(), который, выводит строку:
  `User ${имя} is ${возраст} years old and has ${кол-во друщзей} friends`
*/

const mango = new User({ name: "Mango", age: 2, friends: 20 });
mango.getInfo(); // User Mango is 2 years old and has 20 friends

const poly = new User({ name: "Poly", age: 3, friends: 17 });
poly.getInfo(); // User Poly is 3 years old and has 17 friends


//====================== task17 ==================

/*  
 * Расставь отсутствующие this в конструкторе Account
*/

function Account(login, password, type = "regular") {
    login = login;
    password = password;
    type = type;
  
    changePassword = function(newPassword) {
      password = newPassword;
    };
  
    getInfo = function() {
      console.log(`
        Login: ${login}, 
        Pass: ${password}, 
        Type: ${type}
      `);
    };
  }
  
  const account = new Account("Mango", "qwe123", "premium");
  
  console.log(account.login); // 'Mango'
  console.log(account.password); // 'qwe123'
  console.log(account.type); // 'premium'
  
  account.changePassword("asdzxc");
  console.log(account.password); // 'asdzxc'
  
  account.getInfo(); // Login: 'Mango', Pass: 'asdzxc', Type: 'premium'
  

//====================== task18 ==================

/*  
 * Напиши конструктор Storage(items), который будет создавать объекты для управления складом товаров
 * При вызове будет получать один аргумент - начальный массив товаров, и записываеть его в свойство items
 *
 * Добавь метод getItems, который возвращает массив текущих товаров
 * Добавь метод addItem(item), который получает новый товар и добавляет его к текущим
 * Добавь метод removeItem(item), который получет товар и, если он есть, удаляет его из текущих
*/

const storage = new Storage([
    "Нанитоиды",
    "Пролонгер",
    "Железные жупи",
    "Антигравитатор"
  ]);
  
  const items = storage.getItems();
  console.log(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]
  
  storage.addItem("Дроид");
  console.log(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]
  
  storage.removeItem("Пролонгер");
  console.log(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]
Collapse



