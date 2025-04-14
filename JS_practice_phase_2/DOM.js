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
    console.log(el);
});

// forEach loop cannot access through dom
// we need to conver it to an array first
console.log(val);
console.log(links);
