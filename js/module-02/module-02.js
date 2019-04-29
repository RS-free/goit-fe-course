'use strict'
//массивы
const people = ['Lena', 'Kostik', "Sanek"];
console.log(people[0]); //Lena
console.log(people[1]); //Kostik
console.log(people[2]); //Sanek

//перезапись элемента массива
people[0] = 'Katya';
console.log(people[0]); //Katya

//добавление элемента в массив
people[3] = 'Lena';
console.log(people[3]); // Lena

console.log(people); // ["Katya", "Kostik", "Sanek", "Lena"]

//длина массива
console.log(people.length); //4

people.length = 7;
console.log(people.length); //7
console.log(people); //["Katya", "Kostik", "Sanek", "Lena", empty × 3]
console.log(people[5]); // undefined

people.length = 2;
console.log(people);//["Katya", "Kostik"]

//split & join
const message = 'Welcome to the moon!';
console.log(message.split(' '));//["Welcome", "to", "the", "moon!"]
console.log(message.split(''));//["W", "e", "l", "c", "o", "m", "e", " ", "t", "o", " ", "t", "h", "e", " ", "m", "o", "o", "n", "!"]

console.log(people.join(''))//KatyaKostik
console.log(people.join(','))//Katya,Kostik
console.log(people.join('-'))//Katya-Kostik

//indexOf & includes
console.log(people.indexOf('Kostik'));//1
console.log(people.indexOf('Lena'));//-1

console.log(people.includes('Kostik'));//true
console.log(people.includes('Lena'));//false

//push, pop, shift, unshift
const numbers = [];

numbers.push(1);
console.log(numbers);//[1]

numbers.push(2);
console.log(numbers);//[1, 2]

numbers.push(3);
console.log(numbers);//[1, 2 ,3]

console.log(numbers.pop());//3
console.log(numbers);//[1, 2]

console.log(numbers.pop());//2
console.log(numbers);//[1]

console.log(numbers.pop());//1
console.log(numbers);//[]

console.log(numbers.pop());//undefined

console.log(people.shift());//Katya
console.log(people);//["Kostik"]

people.unshift('Elena');
console.log(people);//["Elena", "Kostik"]

//slice & splice
const animals = ['tiger', 'elephant', 'cow', 'pig', 'snake', 'wolf'];
console.log(animals.slice(0, 2));//['tiger', 'elephant']
console.log(animals.slice(1, 3));//["elephant", "cow"]

console.log(animals.slice(1));//["elephant", "cow", "pig", "snake", "wolf"]
console.log(animals.slice());//['tiger', 'elephant', 'cow', 'pig', 'snake', 'wolf']

console.log(animals.slice(-1));//["wolf"]
console.log(animals.slice(-2));//["snake", "wolf"]

//удаление
const scores = [1, 2, 3, 4, 5];
const deletedScores = scores.splice(0, 3);
console. log(scores);//[4, 5]
console. log(deletedScores);//[1, 2, 3]

//вставка
const colors = ['red', 'black', 'white'];
colors.splice(2, 0, 'blue');
console.log(colors);//["red", "black", "blue", "white"]

colors.splice(1, 0, 'yellow', 'pink');
console.log(colors);//["red", "yellow", "pink", "black", "blue", "white"]
colors.splice(0, 0, 'green', 'gray');
console.log(colors);//["green", "gray", "red", "yellow", "pink", "black", "blue", "white"]

//замена
const languages = ['C', 'C++', 'Python', 'Ruby', 'Java'];
languages.splice(1, 1, 'JavaScript');
console.log(languages);//["C", "JavaScript", "Python", "Ruby", "Java"]

languages.splice(2, 1, 'C#', 'Swift', 'Go');
console.log(languages);//["C", "JavaScript", "C#", "Swift", "Go", "Ruby", "Java"]

//concat
const girls = ['Sara', 'Jesika', 'Barbra', 'Yoko'];
const children = girls.concat(['Bradly', 'Tom', 'Dan', 'Styven']);

console.log(children);//["Sara", "Jesika", "Barbra", "Yoko", "Bradly", "Tom", "Dan", "Styven"]
console.log(girls);//['Sara', 'Jesika', 'Barbra', 'Yoko']

//reserve
const fruits = ['Banana', 'Apple', 'Ananas', 'Peach'];
fruits.reverse();
console.log(fruits);//["Peach", "Ananas", "Apple", "Banana"]

//isArray
const boys = 10;
console.log(Array.isArray(girls));//true
console.log(Array.isArray(boys));//false

//циклы
// while с предусловием
let counter = 0;
while (counter < 10){
    console.log('counter: ', counter);
    counter += 1;
}

let clientCounter = 18;
const maxClients = 25;
while(clientCounter < maxClients){
    console.log(clientCounter);
    clientCounter += 1;
}

const pupsik = ['Lena', 'Kostik', 'Sashik'];
let i = 0;
while(i < pupsik.length){
    console.log('Logging pupsik: ', pupsik[i]);
    i += 1;
}

const number = [];
let num = 0;
while(num < 10){
    number.push(num);
    num += 1;
}
console.log('number: ', number);

// do...while с постусловием
// let input = 0;
// do{
//     input = Number(prompt('Enter the number more than 10 please', ''));
// }while(input <= 10);

// for со счетчиком
const sth = 10;
for(let j = 0; j < sth; j += 1){
    console.log(j);
}

for(let j = 0, max = 10; j < max; j += 1) {
    console.log(`${max} % ${j} = `, max % j);
}

for(let k = 0, max = pupsik.length; k < max; k += 1){
    console.log(pupsik[k]);
}

for(let k = 0; k < 10; k += 1){
    number.push(`number-${k}`);
}
console.log(number);

// for of бесконечный цикл
for(const value of pupsik){
    console.log(value);
}

const iterable = 'javascript';
for(const value of iterable){
    console.log(value);
}

//break & continue
const pupsikName = 'Kostik';
let resultMsg = '';
for(const value of pupsik){
    if(value === pupsikName){
        resultMsg = 'Pupsik with this name is in a base';
        break;
    }
    resultMsg = 'Pupsik with this name is not in a base';
}
console.log(resultMsg);//Pupsik with this name is in a base

const pupsikName1 = 'Lena';
let resultMsg1 = 'Pupsik with this name is not in a base';
for(const value of pupsik){
    if(value === pupsikName1){
        resultMsg1 = 'Pupsik with this name is in a base';
        break;
    }
}
console.log(resultMsg1);//Pupsik with this name is in a base

const num1 = 10;
for (let i = 0; i < num1; i += 1){
    if (i % 2 === 0) continue;
    console.log('Нечетное i: ', i);//1, 3, 5, 7, 9
}

