// DOM
// document.getElementById
// getting an element
let val;
val = document.getElementById('title');
val = document.getElementById('title').id;
val = document.getElementById("title").className;
// changing style
document.getElementById('title').style.background = '#444';
document.getElementById("title").style.color = "#fff";
document.getElementById("title").style.padding = "10px";
// changing content
document.getElementById("title").innerText = "New Title";
document.getElementById("title").innerHTML = "<i>New Title</i>";

val = document.getElementById('title');
val.innerText = "Ha Ha Ha";

// document.querySelector()
val = document.querySelector('#title');
val = document.querySelector(".title-class");
val = document.querySelector("h3");
val = document.querySelector("ol");
val = document.querySelector("li");
val = document.querySelector("ul li");
val = document.querySelector("ol li");
val.style.background = 'red';
val.style.color = "white";
val = document.querySelector('li:last-child');
val = document.querySelector('li:nth-child(even)');
val.innerText = "Hello";




console.log(val);


/*
let val;

val = this;
val = window.document;
val = document;
val = document.all;
val = document.all.length;
val = document.head;
val = document.body;
val = document.forms;
val = document.forms[0].method;
val = document.forms[0].action;
val = document.links[0];
val = document.links[0].href;
val = document.links[0].className;
val = document.links[0].classList;
val = document.scripts[0];
val = document.scripts[0].src;
val = document.scripts[0].getAttribute('src');

links = document.links;
let linkArr = Array.from(links);
linkArr.forEach(function (link) {
    console.log(link);
});

console.log(val);




// Sub class
// inheritance
class Person {
    constructor(fname, lname) {
        this.firstName = fname;
        this.lastName = lname;
    }
    greeting() {
        return `Hello ${this.firstName} ${this.lastName}!`;
    }
    static test() {
        console.log("I am a static function");
    }
}

class Customer extends Person {
    constructor(fname, lname, phone, membership) {
        super(fname, lname);
        this.phone = phone;
        this.membership = membership;
    }
    fullName() {
        console.log(`${this.firstName} ${this.lastName}`);
    }
}

let person1 = new Person("Arman", "Hossain");
let customer1 = new Customer("Rony", "Chowdhury", "01874015451", "123")

console.log(person1.greeting());
console.log(customer1.fullName());
// console.log(person1.fullName());
console.log(Person.test()); // static can be called from a Class not from an object


class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = dob;
    }
    calculateAge() {
        let birthday = new Date(this.dob);
        let diff = Date.now() - birthday.getTime();
        let ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}
// let person1 = new Person("arman", "hossain", "30-04-1997");
// let person2 = new Person("nusrat", "nowmi", "2 6-02-1999");
// let person3 = new Person("jon", "hossain", "15-06-2007");



// console.log(person1);
// console.log(person2);
// console.log(person3);
// console.log(person1.calculateAge());


// let person1 = {
//   firstName: "Arman",
//   lastName: "Hossain",
//   dob: "30-04-1997",
//   fullName: function () {
//     return `${this.firstName} ${this.lastName}`;
//   }
// };
// let person2 = {
//   firstName: "Nusrat",
//   lastName: "Nowmi",
//   dob: "26-02-1999",
//   fullName: function () {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };
// console.log(person1.firstName);
// console.log(person2.firstName);


// Object Method
let person = {
    firstName: "Arman",
    lastName: "Hossain",
    dob: "30-04-1997",
    fullName: function () {
        return `${this.firstName} ${this.lastName}`;
    }
}
    console.log(person.fullName());
    

// For each

var foods = ["Cake", "Ice Cream", "Donut", "Mango"];
var numbers = [1,2,3,4,5,6,7,8];
// 1st parameter: item
// 2nd parameter: index
// 3rd parameter: whole array

foods.forEach(function (item, index, arr) {
    console.log(item);
    console.log(index);
    console.log(arr);
});

// function epression
let print = function (item, index, arr) {
    console.log(item);
    console.log(index);
    console.log(arr);
}
foods.forEach(print);

// array iteration using maping
function addSomething(item) {
    return `${item} is a Food`;
}
let arr_res = foods.map(addSomething);
console.log(arr_res);


function arr_square(item) {
    return item*item;
}
let arr_res = numbers.map(arr_square);
console.log(arr_res);
*/

/*
// Normal Declaration
function sayHello(x) {
    console.log('Hello ' + x);
}
// Function Expression
let sayHello1 = function (x) {
    console.log("hello " + x + " again");
}
sayHello("Arman");
sayHello1("Arman");

// Arrow Function
let sayHello2 = (el) => {
    console.log("I am an arrow function " + el);
}
sayHello2("Hi");
*/

// Function
// User Defined Function
/*
function sayHello() {
    console.log("hello");
    console.log("I am learning JS");
}
let x = sayHello();
*/
