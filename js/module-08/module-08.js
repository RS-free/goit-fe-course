'use strict'
//1
function showClick(){
  console.log('Ok');
}

let btn = document.querySelector('.btn');


console.log(btn);

const About = {
  name: 'ALeks',
  showName(){
    console.log(this.name)
  }
}

About.showName();
btn.addEventListener('click', About.showName.bind(About));

//2
let one = document.querySelector('.one');
let two = document.querySelector('.two');
let three = document.querySelector('.three');

function showOne(event){
  event.stopProragation();
  alert('One');
}

function showTwo(event){
  event.stopProragation();
  alert('Two');
}

function showThree(event){
  event.stopProragation();
  alert('Three');
}

one.addEventListener('click', showOne);
two.addEventListener('click', showTwo);
three.addEventListener('click', showThree);


//3
let nav = document.querySelector('.nav');

function catchBtn1(event){
  event.preventDefault();
  event = event.target;
  console.log(event);
}

nav.addEventListener('click', catchBtn1)
console.log(nav)

//4

let btn2 = document.querySelector('.button');
let count = 0;

function plus(){
  count++
  btn2.textContent
}



//fotoes

let images = document.querySelector('.imeges');
console.log(images);

function show (event){
  console.log(event.target.src);
}

images.addEventListener('click', show);