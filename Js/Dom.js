// Multiselector
/*
// remove element
let listItems = document.querySelectorAll('li');
let list = document.querySelector('ul');
// listItems[5].remove(); // facebook deleted
// list.removeChild(listItems[5]);
list.classList.add("test");
list.classList.remove('sample-class');

let val = list.hasAttribute('title'); // false
list.setAttribute("title", "New Title");
val = list.hasAttribute('title'); // true
console.log(val);

console.log(list);
console.log(listItems);



// replacing element

let newHeading = document.createElement('h1');
newHeading.appendChild(document.createTextNode('H1 New Heading'));
newHeading.className = 'sample-class';

let oldHeading = document.querySelector('h3');
let parent = document.querySelector(".container");
parent.replaceChild(newHeading, oldHeading);

console.log(newHeading);
console.log(oldHeading);
console.log(parent);



// Adding Element to DOM
// Create Element
let olItem = document.createElement('li');

// add id and class
olItem.className = "a new another-class"
olItem.id = "new-element";

// Add Attribute
olItem.setAttribute('title', 'A little to new Element');
olItem.appendChild(document.createTextNode('Javascript'));
document.querySelector('ol').appendChild(olItem);

// console.log(olItem);

let ulItem = document.createElement('li');
let link = document.createElement('a');

link.appendChild(document.createTextNode("Codeforces"));
link.setAttribute('href', 'https://www.codeforces.com');
ulItem.appendChild(link);

document.querySelector('ul').appendChild(ulItem);


console.log(ulItem);


let val;
let list = document.querySelector('ul');
let listItem = document.querySelector('ul li:nth-child(1)');
val = list;
val = listItem;

// Get Child Nodes
val = list.childNodes[3];
val = list.childNodes[3].nodeName; // LI
val = list.childNodes[3].nodeType; // 1 for element
// 1 Element
// 2 Attribute
// 3 Text Node
// 8 Commnet
// 9 Document Itesel
// 10 Doctype
val = list.children;
// val = list.children[0].textContent = "hello";
val = list.children[1].children; // a tag
val = list.children[1].children[0].href;
val = list.childElementCount;
val = listItem.parentElement; // ul
val = listItem.parentNode;
val = listItem.nextSibling.nextSibling;
val = listItem.nextElementSibling.nextElementSibling;
const newLocal = val = listItem.previousSibling;
val = listItem.previousElementSibling;

console.log(val);


// document.querySelectorAll()
// id -> %id
// class -> .class
// tagname -> nothing

var list = document.querySelectorAll('.sample-class');
var list = document.querySelectorAll("li");
var list = document.querySelectorAll("ul li");
var listOdd = document.querySelectorAll('li:nth-child(odd)');
var listEven = document.querySelectorAll("li:nth-child(even)");

listOdd.forEach(function (item) {
  item.style.background = 'gray';
  console.log(item);
});
listEven.forEach(function (item) {
  item.style.background = "pink";
  console.log(item);
});

console.log(list);

// document.getElementsByTagName()

let list = document.getElementsByTagName('li');
list = document.querySelector('ol').getElementsByTagName('li');
// it will access the list items of ol
// querySelector('ol') finds the ol tag first
list = document.querySelector("ul").getElementsByTagName("li");
// it will access the list items of ul
// querySelector('ul') finds the ol tag first

let lisArray = Array.from(list);
lisArray.forEach(function (item) {
  console.log(item);
})


console.log(list[3]);


// document.getElementByClassName()

let list = document.getElementsByClassName('sample-class')
list[0].style.background = 'blue';
list[0].style.color = "yellow";
list[0].style.padding = "20px";
list[0].textContent = 'hello world!';

console.log(list[0]);




// DOM selector
// document.getElementById()
let val;

// Getting and element
val = document.getElementById('document-title');
val = document.getElementById("document-title").id;
val = document.getElementById("document-title").className;

// changing style
document.getElementById('document-title').style.background = '#333';
document.getElementById("document-title").style.color = '#fff';
document.getElementById("document-title").style.padding = '10px';
document.getElementById("document-title").style.display = 'block';
document.getElementById("document-title").style.fontWeight = 'bold';
// changing content
document.getElementById("document-title").textContent = 'new title';
document.getElementById("document-title").innerText = 'again new titile';
document.getElementById("document-title").innerHTML = 'hello world';
document.getElementById("document-title").innerText = "<i>Again again changed title</i>";
document.getElementById("document-title").innerHTML = "<i>Again again changed title</i>";


val = document.getElementById('document-title');
val.innerText = "ha ha ha";

// document.querySelector()
val = document.querySelector('#document-title'); // id needs #
val = document.querySelector(".title-class"); // class needs dot .
val = document.querySelector('h3');
val.style.color = 'red';
val = document.querySelector('ol');
val = document.querySelector('li');
val = document.querySelector("ol li");
val.style.background = 'red';
val.style.color = "blue";
val = document.querySelector("li:last-child");
val = document.querySelector("li:nth-child(2)"); // java
document.querySelector("li:nth-child(2)").innerText = 'Hello';
document.querySelector("li:nth-child(odd)").innerText = "ODD";
document.querySelector("li:nth-child(even)").innerText = "EVEN";

console.log(val);



// DOM element
let val;

val = this; // indicates full html document
val = window; // indicates full html document
val = document; // html document
val = document.all; // all tags of html document
val = document.all.length; // number of tags
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;
val = document.forms;
val = document.forms[0];
val = document.forms[0].method;
val = document.forms[0].action;
val = document.links; // All links
val = document.links[0];
val = document.links[0].href;
val = document.links[0].className;
val = document.links[0].classList;
val = document.images; // all images
val = document.scripts;
val = document.scripts[0];
val = document.scripts[0].src;
val = document.scripts[0].getAttribute('src'); // source of script

links = document.links;
let linkArr = Array.from(links);

linkArr.forEach(function (link) {
  console.log(link.getAttribute('src'));
});

console.log(val);
*/
