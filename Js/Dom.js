
// DOM selector
// document.getElementById()
 












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
