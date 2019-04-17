'use strict'

//dom js

//16.04-1 ==============================================================
// let text = document.getElementsById('text');
// let doubleText = document.getElementsByClassName('doubleText');

// text.style.color = 'red';

// console.log(doubleText);
// console.log(text.textContent = 'new text');


// let text = document.querySelectorAll('div');
// console.log(text);
//======================================================================

//16.04-2 ==============================================================
// let list = document.querySelector('.list');
//   function fn(){
//     let newMass = Array.from(list.children).map(el => el.textContent);//=[...el];
//     console.log(newMass)
//   }
//   fn(list.children)

// console.log(list.firstChild.textContent = 'AAAAAAAAAAAAA');
//----------------------------------------------------
// let copyMass = fn(list.children);
// console.log(copyMass);

// const element = document.createElement('ul');
// const body = document.body;
// list.apend(element);

// let getli = copyMass.reduce((string, el) => string + `<li>${el}</li>`, '');
// element.innerHTML = getLi; //'<li>list ${}</li>'

// let textInput = document.querySelector('.text');
// let Input = document.querySelector('.input')
// let button = document.querySelector('.button');

// console.log(button);

// button.onclick = function(){
//   console.log('Ok')
// }
//=========================================================

//16.04-3 ==================================================
let forward = document.querySelector('.forward');
let back = document.querySelector('.back');
let images = document.querySelectorAll('.images img');

//console.log(images[2]);

let i = 0
forward.onclick = function(){
  images[i].style.display = 'none';
  i++
  // setTimeout(() => {
  //   images[i].style.display = 'block';
  // }, 1000);
  // //console.log('Ok');
  if(i >= images.length){
    i = 0
  }
  images[i].style.display = 'block';
}

back.onclick = function(){
  images[i].style.display = 'none';
  i -=1
  if(i < 0){
    i = images.length -1
  }
  images[i].style.display = 'block';

}

forward.onclick = function(){
  images[i].className = '';
  i++
  if(i >= images.length){
    i = 0
  }
  images[i].className = 'showed';
}

back.onclick = function(){
  images[i].className = '';
  i -=1
  if(i < 0){
    i = images.length -1
  }
  images[i].className = 'showed';
}
//=======================================================

//17.04-1 ===============================================
// let createNew = document.createElement('div');
// createNew.innerHTML = 'Hello';
// createNew.style.fontSize = '50px';
// createNew.className = 'text';
// //let a = 121;
// let a = 'picture';
// createNew.innerHTML = `<a href ='#'>${a}</a>`;
// //createNew.innerHTML = `<a href ='#'>Click</a>`;
// console.log(createNew);//<div>Hello</div>
// let body = document.body;

// body.prepend(createNew);
// //body.replaceWith(createNew); заменит <body> в html 

// let createImg = document.createElement('img');

// createImg.setAttribute('src', 'https://images.pexels.com/photos/2106452/pexels-photo-2106452.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
// createImg.setAttribute('alt','It`s image');
// console.log(createImg.alt);


// body.append(createImg);
//========================================================