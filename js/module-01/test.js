"use strict";

//0.1 + 0.2
console.log(0.1 + 0.2 === 0.3);
console.log(0.1 + 0.2);

console.log((0.1 * 100 + 0.2 * 100) / 100);
//или
const resultSum = 0.1 + 0.2;
console.log(+resultSum.toFixed(10));

//concatenated strings
const state = "Mango " + "is " + "happy";
console.log(state); //Mango is happy

let resultConc;

resultConc = 5 + "5";
console.log(resultConc); //'55'
console.log(typeof resultConc); //string

resultConc = 5 + "5" + 5;
console.log(resultConc); //'555'
console.log(typeof resultConc); //string

resultConc = 5 + 5 + "5";
console.log(resultConc); //'105'
console.log(typeof resultConc); //string

//methods of strings
const text = "WelcOme hOme";

console.log(text.length); //12
console.log("im from America".length); //15
console.log(text.toLowerCase()); //welcome home
console.log(text.toUpperCase()); //WELCOME HOME

console.log(text.indexOf("hOme")); //8
console.log(text.indexOf("do")); //-1

console.log(text.includes("WelcOme")); //true
console.log(text.includes("welcome")); //false

const nameOne = "Aleks";
const ageOne = 30;
const mood = "happy";

const content =
  "My name is " +
  nameOne +
  ", I'm " +
  ageOne +
  " years old and very " +
  mood +
  ".";
console.log(content); //My name is Aleks, I'm 30 years old and very happy.

//alternative
const sameContent = `My name is ${nameOne}, I'm ${ageOne} years old and very ${mood}.`;
console.log(sameContent); ///My name is Aleks, I'm 30 years old and very happy.

console.log(`result of summ is ${3 + 6}.`); //result of summ is 9

//to string
let f = false;
console.log(f); //"false"

console.log(String(false) === "false"); //true - *1

console.log(true + "text"); //"truetext" - *2
console.log("100" + undefined); //100undefined

//to number
let g = +"200"; //200
let h = Number("300"); //300

console.log(+"200text"); //NaN
console.log(+undefined); //NaN
console.log(+null); //0
console.log(+true); //1
console.log(+false); //0
console.log("1" == true); //true
console.log("1" === true); //false

//part 2
//&&
const NUM1 = 23;
const resultNUM1 = NUM1 < 30 && NUM1 > 10;
console.log(resultNUM1); //true

const NUM2 = 23;
const resultNUM2 = NUM2 > 30 && NUM2 > 10;
console.log(resultNUM2); //false

//||
const NUM3 = 23;
const resultNUM3 = NUM3 < 30 || NUM3 > 10;
console.log(resultNUM3); //true

const NUM4 = 23;
const resultNUM4 = NUM4 > 30 || NUM4 > 10;
console.log(resultNUM4); //true

//!
console.log(!true); // false
console.log(!false); // true

//if
let season = "winter";
const monthName = "June";

if (monthName === "June") {
  season = "summer";
}
console.log(season);

//else
let seasonNext;
const monthNameOne = "January";

if (monthNameOne === "June") {
  seasonNext = "summer";
} else {
  seasonNext = "winter";
}
console.log(seasonNext);

//else if
let seasonLast;
const monthNameTwo = "January";

if (monthNameTwo === "June") {
  seasonLast = "summer";
} else if (monthNameTwo === "September") {
  seasonLast = "autumn";
} else if (monthNameTwo === "May") {
  seasonLast = "spring";
} else {
  seasonLast = "winter";
}
console.log(seasonLast);

//? : ternary operator
const monthNameThree = "June";
const seasonBefore = monthNameThree === "June" ? "summer" : "winter";
console.log(seasonBefore);

//switch
const Month = "January";
let seasonM;
switch (Month) {
  case "June":
    seasonM = "summer";
    break;
  case "May":
    seasonM = "spring";
    break;
  case "September":
    seasonM = "autumn";
    break;
  default:
    seasonM = "winter";
}
console.log(seasonM); //winter

//
if (confirmLog === null || confirmLog == "") {
  //cancel
  alert(cancel);
} else if (confirmLog != adminLogin) {
  alert(wrongLog);
} else {
  const confirmPass = prompt("Enter your password please");
  if (confirmPass === null || confirmPass == "") {
    //cancel
    alert(cancel);
  } else if (confirmPass !== adminPassword) {
    alert(wrongPass);
  } else {
    alert(rightPass);
  }
}
