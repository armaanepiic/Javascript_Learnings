let val;

val = this;
val = window;
val = window.document;
val = document;
val = document.all; // all tags in an array
val = document.all[2];
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;

val = document.forms;
val = document.forms[0];
val = document.forms[1];
val = document.forms[0].method;
val = document.forms[0].action;

val = document.links;
val = document.links[0].href;
val = document.links[0].className;
val = document.links[0].classList;

val = document.images

val = document.scripts;
val = document.scripts[0].src;
val = document.scripts[0].getAttribute('src');

let links = document.links;
let arr = Array.from(links);
arr.forEach(el => {
    // console.log(el);
});

// forEach loop cannot access through dom
// we need to conver it to an array first
// console.log(val);
// console.log(links);

// selector
// document.getElementById('id-name')


val = document.getElementById('document-title');
val = document.getElementById("document-title").id;
val = document.getElementById("document-title").className;
val = document.getElementById("document-title").classList;

// changing styles
val = document.getElementById('document-title');
val.style.background = 'teal';
val.style.color = '#fff';
val.style.padding = '10px';
// val.style.display = 'none';
val.style.display = "block";

// changing content
val.textContent = 'New Title';
val.innerText = "Again New Title";
val.innerHTML = "<strong><i>Italic new title</i></strong>";

// querySelector
// called by name, id, class, tag

// id
val = document.querySelector('#document-title');
val.style.color = "black";
// class
val = document.querySelector(".sample-class");
val.style.color = "#fff";
// tagName
val = document.querySelector('h3');
val.style.background = 'tomato';
// ol
val = document.querySelector('ol');
val = document.querySelector("li");
val = document.querySelector('ul li');
val = document.querySelector('ol li');
// val.style.background = 'yellow';
val = document.querySelector('li:last-child'); // same level last child
val = document.querySelector('li:nth-child(1)');
// val.innerHTML = 'Hello';

// Multiselector
// document.getElementByClassName()
let list = document.getElementsByClassName('sample-class')[0];
list.style.background = "green";
list.style.color = 'skyblue';
list.textContent = "Hello World";

// document.getElementByTagName()
list = document.getElementsByTagName('li');
list = document.querySelector('ol').getElementsByTagName('li');
let arrList = Array.from(list);
arrList.forEach(el => {
    // console.log(el);
});

// document.querySelectorAll()
// it create pure array
list = document.querySelectorAll('.sample-class');
list = document.querySelectorAll('ul li')
list = document.querySelectorAll("ol li");
list.forEach(el => {
    // console.log(el);
});
var listOdd = document.querySelectorAll('li:nth-child(odd)');
var listEven = document.querySelectorAll('li:nth-child(even)');
listOdd.forEach(el => {
    // el.style.background = 'yellow';
});
listEven.forEach(el => {
    // el.style.background = 'tomato';
});

// Traversing the DOM
list = document.querySelector('ul');
val = list.childNodes;
val = list.childNodes[4];
val = list.childNodes[3].nodeName;
val = list.childNodes[4].nodeType;
// 1 -> Element
// 2 -> Attribute
// 3 -> Text Node
// 4 -> Comment
// 5 -> Document Itself
// 6 -> Doctype
val = list.children[0].children[0].textContent = "Hello";
val = list.children[1].children[0].href;
val = list.firstChild;
val = list.firstElementChild;
val = list.childElementCount;

var listItem = document.querySelector('ul li:first-child');
val = listItem.parentElement;
val = listItem.parentNode.parentElement;
val = listItem.nextElementSibling; // without text


// console.log(listItem);
// console.log(val);

//  
let olItem = document.createElement('li');
// add id class
olItem.className = 'another-class';
olItem.id = 'new-element';
olItem.setAttribute('title', 'A title to new element');
// create content
let olContent = document.createTextNode('JavaScript');
olItem.appendChild(olContent);
let olTarget = document.querySelector('ol');
olTarget.appendChild(olItem);

let ulItem = document.createElement('li');
let linkItem = document.createElement('a');
linkItem.href = 'www.youtube.com';
linkItem.target = '_blank';
linkItem.textContent = 'Youtube';
ulItem.className = 'another-class';
ulItem.id = 'new-element';
ulItem.appendChild(linkItem);

ulItem.setAttribute('title', 'A title to new element');

let ulTarget = document.querySelector('ul');
ulTarget.appendChild(ulItem);


console.log(ulItem);




