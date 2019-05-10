'use strict'

// //setTimeout

// console.log(1);
// setTimeout(() => console.log('2'), 0);
// //console.log(2);
// console.log(3);
// // console.log(4);
// // console.log(5);

// const timerIdA = setTimeout(() => {
//     console.log('hello A');
// }, 1000);

// //clearTimeout(timerId);//отмена вызова функции setTimeout

// const timerIdB = setTimeout(() => {
//     console.log('hello B');
// }, 2000);

// console.log('timerIdA: ', timerIdA);
// console.log('timerIdB: ', timerIdB);
// //clearTimeout(timerIdA);

// //setInterval
// const timerIdC = setInterval(() => {
//     console.log('hello C');
// }, 2000);

//TIMER

// let counter = 0;
// let timerId = null;
// let isActive = false;

const clockface = document.querySelector('.js-clockface');
const startBtn = document.querySelector('.js-start');
const stopBtn = document.querySelector('.js-stop');

class Timer {
    constructor({statusValue = 0, delay = 1000, onclick}){
        this.value = statusValue;
        this.timerId = null;
        this.delay = delay;
        this.isActive = false;
        this.onclick = onclick;
    }
    start(){
        if(!this.isActive){
            this.isActive = true;

            this.timerId = setInterval(() => {
                this.value += 1;
                this.onclick(this.value);
            }, this.delay);
        }
    }

    stop(){
        this.isActive = false;
        clearInterval(this.timerId);
        this.timerId = null;
        this.value = 0;
        this.onclick(this.value);
    }
}

const timer = new Timer({
    statusValue: 0,
    delay: 50,
    onclick: updateClockface,
})

startBtn.addEventListener('click', timer.start.bind(timer));
stopBtn.addEventListener('click', timer.stop.bind(timer,));

function updateClockface(val){
    clockface.textContent = val;
}

// //object
// const timer = {
//     value: 0,
//     timerId: null,
//     isActive: false,
//     start(onStart){
//         if(!this.isActive){
//             console.log('start');

//             this.isActive = true;

//             this.timerId = setInterval(() => {
//                 this.value += 1;
//                 onStart(this.value);
//             }, 1000);
//         }
//     },
//     stop(onStop){
//         console.log('stop');

//         this.isActive = false;

//         clearInterval(this.timerId);
//         this.value = 0;
//         onStop(this.value);
//     },
// };
// //object


// function handleStart(){
//     if(!isActive){//блокирует повторные старты
//         console.log('start');
//         isActive = true;
//         timerId = setInterval(updateCounterValue, 1000);
//     }
// }

// function handleStop(){
//     console.log('stop');
//     isActive = false;
//     clearInterval(timerId);
//     counter = 0;
//     clockface.textContent = counter;
// }

//DATE & TIME
const date1 = new Date();//текущая дата и время
const date2 = new Date('January, 1, 1990');//нужная дата в виде строки
const date3 = new Date(1999, 6, 11, 15, 30, 0, 0);//точные дата и время в цифрах
//месяцы считаются с 0, если указать 12й месяц, то выдаст январь след.года
//то же самое с датой
console.log(date1);
console.log(date2);
console.log(date3);

//01.01.1970 - дата Unix - считается в мс
const date4 = Date.now();
console.log(date4);