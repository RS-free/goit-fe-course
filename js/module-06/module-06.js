'use strict'
//2.1 
//[[Prototype]] === __proto__
const animal1 = { eats: true };
const dog1 = { barks: true };
dog1.__proto__ = animal1;

// в dog можно найти оба свойства
console.log( dog1.barks ); // true от dog1
console.log( dog1.eats ); // true от animal1
//=======================================================================
const animal2 = { eats: true };
const dog2 = { barks: true, eats: false };
dog2.__proto__ = animal2;
// в dog можно найти оба свойства
console.log( dog2.barks ); // true от dog2, так как оно задано ему, если этого значения не будет, то возьмет у прототипа
console.log( dog2.eats ); // false от dog2

//2.2 
//Object.create
const animal3 = { eats: true };

const dog3 = Object.create(animal3);
dog3.barks = true;

for (const key in dog3) {
  console.log(key); // barks, eats
}

//2.3 
//Объект без прототипа
const user1 = {
  name: 'Mango',
  age: 2
};
console.log(user1.toString); // function
//Это может приводить к ошибкам. Чтобы этого избежать, мы можем создавать объект 
//с помощью метода Object.create(obj), передав параметру obj значение null.
const user2 = Object.create(null);
user2.name = 'Mango';
console.log(user2.name); // Mango
console.log(user2.toString); // undefined

//2.4
//hasOwnProperty
const animal4 = { eats: true };
const dog4 = Object.create(animal4);
dog4.barks = true;
for (const key in dog4) {
  console.log(key); // barks, eats
}
//Именно поэтому мы используем метод obj.hasOwnProperty(prop), который возвращает true, 
//если свойство prop принадлежит самому объекту obj, а не его прототипу, иначе false.
const animal5 = { eats: true };
const dog5 = Object.create(animal5);
dog5.barks = true;
for (const key in dog5) {
  if (!dog5.hasOwnProperty(key)) continue;
  console.log(key); // barks
}

//3.1
//Свойство Fn.prototype
function Guest1 (name, room) {
  this.name = name;
  this.room = room;
}
console.log(Guest1.prototype);// {constructor: ƒ}

const mango = new Guest1('Mango', 28);//*
console.log(mango);

Guest1.prototype.showGuestInfo = function () {
  console.log(`name: ${this.name}, room: ${this.room}`);
};
const poly = new Guest1('Poly', 36);//** 

mango.showGuestInfo(); // *name: Mango, room: 28
poly.showGuestInfo(); // **name: Poly, room: 36

//3.2 Свойство constructor

function Guest2 (name, room) {
  this.name = name;
  this.room = room;
}
Guest2.prototype = {
  constructor: Guest2
};

//4
//Наследование и конструкторы

function Hero (name, xp) {
  this.name = name;
  this.xp = xp;
}
/*Теперь у нас есть конструктор базового класса героя, добавим в prototype какой-то метод.*/
Hero.prototype.gainXp = function (amount) {
  console.log(`${this.name} gained ${amount} experience points`);
  this.xp += amount;
};
// const mango1 = new Hero('Mango', 1000);
// console.log(mango1); // Hero { name: 'Mango', xp: 1000 }
// // Так как mango это экземпляр Hero,
// // то ему доступны методы из Hero.prototype
// mango1.gainXp(500); // Mango gained 500 experience points
// console.log(mango1); // Hero { name: 'Mango', xp: 1500 }

function Warrior(name, xp, weapon) {
  /*Во время выполнения функции Warrior вызываем функцию Hero в контексте объекта создающегося
    в Warrior, а так же передаем аргументы для инициализации полей this.name и this.xp
    this в данном случае это наш будущий экземпляр Warrior*/
  Hero.call(name, xp, this);
  this.weapon = weapon;// Тут добавляем новое свойство - оружие
}
// Warrior.prototype.attack = function () {// Сразу добавим метод для атаки в prototype воина
//   console.log(`${this.name} attacks with ${this.weapon}`);
// };
// const poly = new Warrior('Poly', 200, 'sword');
// console.log(poly); // Warrior {name: "Poly", xp: 200, weapon: "sword"}
// poly.attack(); // Poly attacks with sword

/*Используем Object.create() для того чтобы изначально
  записать в Warrior.prototype пустой объект, в __proto__ которого
  будет ссылка на Hero.prototype.
  Это необходимо сделать до того как добавлять. какие-либо методы*/
Warrior.prototype = Object.create(Hero.prototype);
// Теперь добавим метод для атаки
Warrior.prototype.attack = function () {
  console.log(`${this.name} attacks with ${this.weapon}`);
};
// // попробуем теперь 
// poly.gainXp(300); // Poly gained 300 experience points
const poly = new Warrior('Poly', 200, 'sword');