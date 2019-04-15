'use strict'

// //Module-06 

// //Task-1
// /*Напиши функцию-конструктор Account, которая добавляет будущему
//   объекту поля login, email. 
//   В prototype функции-конструктора добавь метод getInfo(), 
//   который выводит в консоль значения полей login и email. 
//   Обрати внимание, метод всего один, в поле prototype функции-конструктора, 
//   а использовать его смогут все экземпляры, по ссылке.
//   Создать несколько экземпляров с разными значениями свойств, выведи их в консоль.*/

class Account {
constructor (login,email){
  this.login = login;
  this.email = email;
}
getInfo() {
  console.log(`Login: ${this.login}, Email: ${this.email}`);
}
}

const account = new Account('Mangozedog', 'mango@dog.woof');
const account2 = new Account('Bond', '456@i.ua');

//console.log(Account.prototype.getInfo); // function
account.getInfo(); // Login: Mangozedog, Email: mango@dog.woof
account2.getInfo(); // Login: Bond, Email: 456@i.ua

// //Task-2
// /* Напиши ES6 класс StringBuilder.
//   На вход (в конструкторе) он получает один параметр string - строку,
//   которую записывает в свойство _value.
//   Добавь классу следующие методы:
//     - геттер value - возвращает текущее значение поля _value
//     - append(str) - получает параметр str (строку) и добавляет ее в конец _value
//     - prepend(str) - получает параметр str (строку) и добавляет ее в начало value
//     - pad(str) - получает параметр str (строку) и добавляет ее в начало и в конец _value*/
class StringBuilder {
  constructor (str) {
    this._value = str;
  }
  get value(){
    return this._value;
  }
  append(str){
    return this._value += str;
  }
  prepend(str){
    return this._value = str += this._value;
  }
  pad(str){
    return this._value = str += this._value + str;
  }
}
console.log(StringBuilder.prototype);
const builder = new StringBuilder('.');

builder.append('^'); 
console.log(builder.value); // '.^'

builder.prepend('^'); 
console.log(builder.value); // '^.^'

builder.pad('='); 
console.log(builder.value); // '=^.^=' 

//Task-3
/** Напиши класс Car с указанными свойствами и методами*/
/*Добавь свойства:
        - speed - для отслеживания текущей скорости, изначально 0.
        - maxSpeed - для хранения максимальной скорости 
        - running - для отслеживания заведен ли автомобиль, возможные значения true или false. 
      Изначально false.
        - distance - содержит общий киллометраж, изначально с 0*/
class Car {
  constructor({speed = 0, maxSpeed = 0, running = false, distance = 0, price = 0}){
    this.speed = speed;
    this.maxSpeed = maxSpeed;
    this.running = running;
    this.distance = distance;
    this.price = price;
   }
  // Добавь код для того чтобы завести автомобиль. Просто записывает в свойство running значание true
  turnOn() {
    this.running = true;
    console.log(`car is ready to go coz this.runnig: ${this.running}`);
  }
  // Добавь код для того чтобы заглушить автомобиль. Просто записывает в свойство running значание false
  turnOff() {
    this.running = false;
    console.log(`car doesn't ready to go coz this.runnig: ${this.running}`);
  }
  // Записывает в поле speed полученное значение, при условии что оно не больше чем значение свойства maxSpeed
  accelerate(spd) {
    if (spd < this.maxSpeed){
      this.speed = spd;
      console.log(`car can't go faster then ${this.maxSpeed}`);
    }
  console.log(`Accelerate speed: ${this.speed}`);
  }
  // Записывает в поле speed полученное значение, при условии что оно не больше чем значение свойства maxSpeed и не меньше нуля
  decelerate(spd) {
    if (0 < spd < this.maxSpeed){
      this.speed = spd;
      console.log(`Car can't not go faster then ${this.maxSpeed} and slower then 0`);
    }
  console.log(`Decelerate speed: ${this.speed}`);
  }
  // Добавляет в поле distance киллометраж (hours умноженное на значение поля speed), но только в том случае если машина заведена!
  drive(hours) {
    if (this.running = true){
      return (this.distance = hours * this.speed);
      console.log(`Car doesn't work:()`);
    }
  console.log(`Distance: ${this.distance}`);
  }
  static getSpecs (car){
    console.log(`maxSpeed: ${car.speed}, speed: ${car.speed}, running: ${car.running}, distance: ${car.distance}`);
  }
  get value(){
    return car.value(`${this.price}`);
  }
}
  
// //Task-4
// /*Добавь к классу Car из предыдущего задания статический метод getSpecs, который принимает объект-машину как параметр
// * и выводит в консоль значения полей maxSpeed, speed, running и distance.*/
const car = new Car({ maxSpeed: 100 });
car.turnOn();
car.accelerate(50);
car.drive(2);
Car.getSpecs(car); // maxSpeed: 100, speed: 50, running: true, distance: 100

// //Task-5
// /*Добавь классу Car свойство цены автомобиля, назови его сам.
// * Добавь геттер и сеттер value, который будет работать с свойством цены автомобиля.*/

const car = new Car({ maxSpeed: 50, price: 2000 });
console.log(car.value); // 2000

car.value = 4000;
console.log(car.value); // 4000
