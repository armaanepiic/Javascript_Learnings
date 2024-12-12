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
