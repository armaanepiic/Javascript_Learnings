
// ES6 ECMAScript6

// constructor

// class Person {
//     constructor(age, name) {
//         this.age = age;
//         this.name = name;
//     }
//     getName() {
//         // console.log(this.name);
//         return this.name;
//     }
// }
// let person1 = new Person(25, "Arman");
// console.log(person1);
// console.log(person1.getName());


/*
// Symbol
// Symbol is always unique

let a = Symbol();
let b = Symbol();
// console.log(a);
// console.log(b);
// console.log(a == b);

let person = {
    name: "Arman",
    age: "26",
    [a]: "Hello"
}
// console.log(person);
// symbol is not the property of this object
console.log(Object.getOwnPropertyNames(person));
console.log(Object.getOwnPropertySymbols(person));
console.log(JSON.stringify(person));
for(x in person)console.log(x);

let sym1 = Symbol();
let sym2 = Symbol();
console.log(sym1 == sym2);
*/

// iterator
// let iterable = "Hello";
// Symbol.iterator
// let iter = iterable[Symbol.iterator]();
// console.log(iter);
// console.log(iter.next()); // H
// console.log(iter.next()); // e
// console.log(iter.next()); // l
// console.log(iter.next()); // l
// console.log(iter.next()); // o
// console.log(iter.next()); // undefined
// console.log(iter.next()); // undefined


/*
// custom iterator
let names = ["Arman", "Nusrat", "John", "Doe"];

function customIterator(arr) {
    let i = 0;
    return {
        next: function () {
            return i < arr.length ? { value: arr[i++], done: false } : { value: undefined, done: true };
        }
    }
}

let members = customIterator(names);
console.log(members.next().value);
console.log(members.next().value);
console.log("random codes");

console.log(members.next().value);
console.log(members.next().value);
console.log(members.next());
*/

/*
// Generator

function* genFunction() {
    console.log("Random code");
    yield 1;
    yield "Rahim";
    console.log("Random code");
    console.log("Random code");
    return;
    console.log("Random code");
    yield 4;
    yield "karim";
    yield ["Hello World"];
}

let iter = genFunction();

console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
*/


/*
// Promise
// successful -> resolve
// fail -> reject
let prom = new Promise((resolve, reject) => {
    let a;
    setTimeout(() => {
        a = 1 + 1;
        if (a == 2) {
            resolve('success');
        } else {
            reject('Failed');
        }
    }, 4000);
})
// .then .catch

prom.then((message) => {
    console.log("I am from catch " + message);
}).catch((message) => {
    console.log("I am from " + message);
})

console.log("I am after promise");
*/

async function getJokes() {
    return "all the jokes";
}
getJokes().then(res => console.log(res));













// let hello = name => console.log(name);
// hello("arman");

// let getSquare = (num) => {return num * num};
// console.log(getSquare(4));

// callback function

// let print = function (item) {
//   console.log(item);
// };
// numbers = [1, 2, 3, 4, 5, 6];
// numbers.forEach(element => {
//     console.log(element);
// });
// let squareNum = numbers.filter((el) => {
//     if (el % 2 == 0) return el * el;
//     // return el * el;
// });
// console.log(squareNum);
// array destructing
// let fruits = ["apple", "orange", "grape"];


// swapping
// let a = 8, b = 10;
// [a, b] = [b, a];
// console.log(a,b);


// obj destructing

// let person = {
//     firstName: "Arman",
//     lastName: "Hossain",
//     dob: "30-04-1997"
// }
// let { firstName:fname, lastName:lname, dob } = person;
// console.log(fname, lname, dob);

// function display(firstName, lastName, dob) {
//   // let fname = person.firstName,
//   //     lname = person, dob = person.dob;
//   console.log(firstName, lastName, dob);
// }
// display(person);


// spread operator

// let str = "Bangladesh";
// let newStr = [...str];
// console.log(newStr);

// let fruit = ["Apple", "Pine-apple", "Mango"];
// let country = ["UK", "Poland", "China"];
// let message = "Hello";

// let newArr = [...country, ...fruit, message];
// console.log(newArr);

// let person = {
//     fname: "Arman",
//     lname: "Hossain",
// }
// let newPerson = { ...person, dob: "30-04-1997" };
// console.log(newPerson);

// Math.max() cannot work with an array
// we can use spread operator to find the max number

// let numbers = [23, 1, 0, -1];
// console.log(Math.max(...numbers));

// let person = ["Arman", "Hossain"];
// let test = (fname, lname) => {
//     console.log(`Hello ${fname} ${lname}`);
// }
// test(...person);

// Rest operator

// let fruits = ["Apple", "Mango", "Grave"];
// let [first, ...second] = fruits;

// console.log(first, second);

// let person = {
//     fname: "Arman",
//     lname: "Hossain",
//     dob: "4-30-1997"
// }
// let { fname, ...others } = person;
// console.log(fname);
// console.log(others);


// let test = (name, ...numbers) => {
//     console.log(name);
//     console.log(numbers);
// }
// test("arman", 1, 2, 3, 4);

//  spread and rest together

// let moreNum = [1, 2, 3, 4, 5];
// let test = (...numbers) => { // rest
//     console.log(numbers);
// }
// test(...moreNum); // spread





/*
// Date object

let val;
let today = new Date();
let birthday = new Date('08-26-1996 11:25:27')

val = today;
val = today.toString();
val = birthday;
console.log(val);
*/

/*
// object method

let person = {
    firstName: "Arman",
    lastName: "Hossain",
    dob: "30-04-2024",
    fullName: function () {
        return `${this.firstName} ${this.lastName}`;
    }
}
console.log(person.fullName());

console.log(typeof undefined);

val = Math.floor(Math.random() * 100 + 1);
console.log(val);
*/




/*
// array iteration using mapping

var foods = ["Cake", "Ice cream", "Chocolates"];

function add(el) {
    return `${el} is a food`;
}
let newArr = foods.map(add);
console.log(newArr);


let newArr = foods.map((el) => {
    return `${el} is a food`;
});
console.log(newArr);

var numbers = [1, 32, 45, 66];

let evenNumbers = numbers.map((el) => {
    if (el % 2 == 0) return el;
});
console.log(evenNumbers);


var numbers = [1, 2, 3, 4];
let squareArr = numbers.map((item) => {
    return item * item;
});
console.log(squareArr);
*/




/*
// array iteration using foreach
var foods = ["Cake", "Ice cream", "Chocolates"];
var numbers = [1, 32, 45, 65];

foods.forEach(function (item, index, arr) {
    console.log(item);
    console.log(index);
    console.log(index);
    console.log(arr);
});
// 1st parameter: item
// 2nd parameter: index
// 3rd parameter: whole array
numbers.forEach(function (el, index, arr) {
    arr[index] = el + 1; // muted
});
console.log(numbers);
let printEverything = function (item, index, arr) {
    console.log(`index : ${index}, item : ${item}`);
    console.log(arr);    
}
foods.forEach(printEverything);
*/


/*
function saySomething() {
    console.log("Hello world");
}
// Function expression

let newFuntion = function (name) {
    console.log("Hello", name);
}
saySomething();
let name = "Arman"
newFuntion(name);


// arrow function
let arrowFunc = (item) => {
    console.log("I am learning " + item);
}
arrowFunc("Arrow funtion")
*/


/*
// Function
function saySomething() {
    console.log("Hello");
}
saySomething();


// Global Scope
var a = 1;
let b = 2;
const c = 3;
// var d = 10;
console.log(`Global Scope: ${a},${b},${c}`);

// Function scope
function test() {
    var a = 4;
    let b = 5;
    const c = 6;
    var d = 10; // not accessible in global scope
    console.log(`Function Scope: ${a},${b},${c},${d}`);
}
test();
console.log(`Global Scope: ${a},${b},${c}`);

// if scope
if (true) {
    var a = 7;
    let b = 8;
    const c = 9;
    console.log(`if Scope: ${a},${b},${c}`);
}
console.log(`Global Scope: ${a},${b},${c}`);

// Loop scope
for (var a = 0; a < 10; a++){
    console.log(`Loop: ${a}`);
}
console.log(`Global Scope: ${a},${b},${c}`);
*/