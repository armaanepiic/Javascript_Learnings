
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
val = document.querySelector("ul li");


console.log(val);











/*
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