'use strict'

//1
/*Есть список категорий с классом categories //(на вкладке HTML).
  Напишите код, который для каждого элемента li //(первая вложенность) 
  в списке categories выведет в консоль:
  - Текст непосредственно в нём (название категории)
  - Количество всех вложенных в него элементов li
  К примеру:
    Категория: Животные
    Количество вложенных li: 4*/
// let list = document.querySelector('.categories');
//   function fn(){
//     let newMass = Array.from(list.children).map(el => el.textContent);
//     console.log(newMass)
//     }
//     fn(list.children)
  
// console.log(list.firstChild.textContent = 'categories');
// const categoriesFirstLi = Array.from(
//   document.querySelectorAll(".categories > li")
// );
// const categoriesUl = Array.from(
//   document.querySelectorAll(".categories  li ul")
// );

const categoriesFirstLi = Array.from(
  document.querySelectorAll(".categories > li")
);
const categoriesUl = Array.from(
  document.querySelectorAll(".categories  li ul")
);

const categoriesList = [];

categoriesFirstLi.forEach(element => {
  categoriesList.push(
    `Категория: ${element.firstChild.textContent.trim()} / Количество: ${
      element.firstElementChild.children.length
    }`
  );
});

console.log(categoriesList);

//2
/*Дан список с классом .list
	- Найдите первого потомка списка и сделайте его текст красного цвета
  - Найдите последнего потомка списка и сделайте его текст синего цвета*/
const list = document.querySelector('.Technology');

const first = list.firstElementChild;
first.className = 'first';

const last = list.lastElementChild;
last.className = 'last';
//3 
/*Дан ul с классом .list и массив строк. 
  Вставьте элементы этого массива в ul так, чтобы каждый элемент стоял в своем li.*/
const elements = ['HTML', 'CSS', 'JavaScript', 'React', 'Node'];

const listDouble = document.querySelector('.list');

for(let items of elements) {
  const item = document.createElement('li');
  item.textContent = items;
  listDouble.append(item);
}
//4
/*Напишите скрипт для создания галлереи изображений. 
  - На вкладке HTML уже есть ul.gallery.
  - Используйте массив объектов для создания тегов img вложенных в li
  - Оформление по вкусу, можно и не делать, достаточно чтобы каждое 
    изображение было 300px по ширине
  - Добавьте все элементы галлереи в ul.gallery*/

const galleryItems = [
  {url:"https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat"},
  {url:"https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish"},
  {url:"https://images.pexels.com/photos/1216482/pexels-photo-1216482.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Two Brown Hen and One Red Rooster"},
  {url:"https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running"},
  {url:"https://images.pexels.com/photos/1316294/pexels-photo-1316294.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Macaw Birds"},
  {url:"https://images.pexels.com/photos/41178/africa-animal-big-carnivore-41178.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "2 Lion on Grass Field during Daytime"}
];


let getli = galleryItems.reduce((string, el) => string + `<img>${el}`, '');
element.innerHTML = getLi; //'<li>list ${el}</li>'


//5

/*
  Есть список с классом .size-filter из произвольного 
  количества чекбоксов, каждый из которых содержит 
  размер одежды в фильтре.
  
  Напишите функцию collectInputData(inputs), которая
  принимает 1 параметр inputs - массив тех инпутов
  у которых состояние checked.
  
  Возвращает массив значений атрибута value.
*/

//6
/*
  Создайте функцию createMovieCard(), которая 
  создает и возвращает DOM-узел карточки кинофильма.
  
  Разметка с классами есть на вкладке HTML.
  Стили на вкладке CSS.
  
  Используйте createElement для создания узлов.
  Добавьте классы и атрибуты.
*/

//7
/*
  В HTML-документе уже есть тег с id="root" (вкладка HTML)
  
  Создайте функцию createBoxes(num), которая принимает 1 параметр num - число.
  
  Функция создает столько div, сколько указано в num и возвращает их в одном
  общем контейнере. После чего необходимо повесить результат работы функции
  в div с id="#root"
  
  Каждый div:
    - Имеет случайный rgb цвет фона
    - Размеры самого первого div - 30px на 30px.
    - Каждый следующий div после первого, должен быть шире и выше предыдущего
      на 10px
*/