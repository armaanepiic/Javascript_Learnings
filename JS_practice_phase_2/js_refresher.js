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
*/

// Multiselector
// document.getElementByClassName()

