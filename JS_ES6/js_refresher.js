/*
let val;

val = this; // window
val = window; // window
val = window.document;
val = document; // HTML document
val = document.all; // array of all tags of document
val = document.all.length; // array length
val = document.head; // head of the HTML
val = document.doctype; // HTML
val = document.domain; // 127.0.0.1
val = document.URL; // http://127.0.0.1:5500/JS_practice_phase_2/index.html
val = document.characterSet; // UTF-8
val = document.contentType; // text/html
val = document.forms; // all forms in an array
val = document.forms[0]; // first form
val = document.forms[0].method;
val = document.forms[0].action;
val = document.links; // array of all links
val = document.links[0].className; // class names in a string format
val = document.links[0].classList; // array of class
val = document.images; // image
val = document.scripts; // array of the scripts in the document
val = document.scripts[0].getAttribute('src'); // js_refresher.js
val = document.links;


// console.log(val);

var links = document.links;
var linkArr = Array.from(links);

linkArr.forEach((element) => {
  console.log(element);
});
console.log(links);


// DOM Selector
// document.getElementById()
let val, value;
val = document.getElementById('document_title');

// accessing the property

value = val.className;
value = val.style.background = '#333';
value = val.style.color = '#fff';
value = val.style.padding = '10px';
value = val.style.display = 'block';

// changing content

value = val.textContent = 'new title';
value = val.innerText = 'again new title';
value = val.innerHTML = "<i>Italic heading</i>";
console.log(value);



// querySelector()
// can be called by class(.className), id(#id), tagName
let val, value;
val = document.querySelector('#document_title'); // id
val = document.querySelector('.title-class') // class
val = document.querySelector('h3');
val = document.querySelector('ol'); // show the first ol
val = document.querySelector('li'); // show the first li tag element
val = document.querySelector('ol li') // show the first li tag element inside the first ol tag
val.style.background = 'red';
val.style.color = 'white';
val = document.querySelector('li:last-child')
val = document.querySelector('li:nth-child(2)')

console.log(val);


// Multiselector
// document.getElementsByClassName()

let val, valArr;
val = document.getElementsByClassName('sample-class');
valArr = Array.from(val);
valArr.forEach(element => {
  console.log(element);
});
val[0].style.background = 'black';
val[0].style.color = "white";
val[0].style.padding = "15px";
console.log(val);


// document.getElementByTagName()
let list = document.getElementsByTagName('li'); // array which is not accessible by foreach loop
let arrlist = Array.from(list);
arrlist.forEach(element => {
    console.log(element);
});
console.log(list);
// here comest all li tag of the document
// if we want the ol li only we should use queryselector
list = document.querySelector('ol').getElementsByTagName('li');
console.log(list);


// document.querySelectorAll()
// id -> # class -> . tag -> nothing
// pure array
let list = document.querySelectorAll('ol li');
// list.forEach(el => console.log(el));
// accessible array
let liOdd = document.querySelectorAll('li:nth-child(odd)');
console.log(liOdd);
liOdd.forEach(element => {
  element.style.background = 'skyblue';
});
let lieven = document.querySelectorAll("li:nth-child(even)");
console.log(lieven);
lieven.forEach((element) => {
  element.style.background = "green";
  element.style.color = 'white';
});


// Traversing the DOM
let list = document.querySelector('ul');
// console.log(list);
let val = list.childNodes;
val = list.childNodes[1];
val = list.childNodes[1].nodeName;
val = list.childNodes[1].nodeType;
// 1 element
// 2 attribute
// 3 text node
// 8 commnet
// 9 document itself
// 10 doctype
val = list.children; // without text 
val = list.children[0].textContent = 'hello';
val = list.children[1].children[0];
val = list.children[1].children[0].href; // href link
val = list.firstChild;
val = list.firstElementChild;
val = list.lastChild;
val = list.lastElementChild;
val = list.childElementCount;
val = list.lastElementChild.parentElement.parentElement;
console.log(val);



// adding element to DOM
// create element
let olItem = document.createElement('li');
// add ID and Class
olItem.className = 'sample-class';
olItem.id = 'new-element';
// add attribute
olItem.setAttribute('title', 'a title to new element');
let item = document.createTextNode('JavaScript');
olItem.appendChild(item);
document.querySelector('ol').appendChild(olItem);
console.log(olItem);

let ulItem = document.createElement('li');
let ulLink = document.createElement('a');
ulLink.href = 'https://www.youtube.com';
ulLink.setAttribute('target', '_blank');
let text = document.createTextNode('youtube');
ulLink.appendChild(text);
ulItem.appendChild(ulLink);


// console.log(ulItem);
console.log(ulItem);
document.querySelector('ul').appendChild(ulItem);
let links = document.querySelectorAll('ul li a');
links.forEach(el => el.setAttribute('target', '_blank'));

console.log(links);


// replacing elements
let newHeading = document.createElement('h1');
let oldHeading = document.querySelector('h3');

newHeading.appendChild(document.createTextNode('H1 new heading'));
let parent = document.querySelector('.container');
parent.replaceChild(newHeading, oldHeading);

// remove element
let listItems = document.querySelectorAll('li');
listItems[0].remove();
listItems[1].remove();
let list = document.querySelector('ol');

console.log(list);
console.log(listItems);


// events of js
let btn = document.getElementById('btn');
// btn.addEventListener('click', () => { console.log('clicked') });

// console.log(btn);

btn.addEventListener('click', message);
function message(e) {
  let val = e.target;
  val = e.target.id;
  val = e.timeStamp;
  val = e.type;
  val = e.clientY;
  val = e.clientX;
  console.log(val);
}

document.querySelector('.container').style.border = '2px solid red';
document.querySelector('.container').style.background = 'pink';
document.querySelector('.container').addEventListener('mouseover', (el) => {
  console.log(el.offsetX);
});*/

let item = document.getElementById('name');
item.addEventListener('keyup', test);
function test() {
  document.getElementById('para').innerText = this.value;
}

// console.log(item);
