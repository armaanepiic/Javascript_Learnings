// Math object
let val;

val = Math.PI;
val = Math.E;
val = Math.round(3.6);
val = Math.ceil(1.1);
val = Math.floor(7.2);
val = Math.sqrt(25);
val = Math.abs(-2);
val = Math.pow(2, 3);
val = Math.min(8, 2, 4, 0);
val = Math.max(8, 2, 4, 0);
val = Math.random();
val = Math.round(Math.random() * 100 + 1);




console.log(val);








/*
// Object methods
let person = {
    firstName: "Arman",
    lastName: "Hossain",
    Dob: "30-04-1997",
    Contact: "01874015451",
    fullName: function(){
        return `${this.firstName} ${this.lastName}`;
    }
}
console.log(person.firstName);
console.log(person.fullName());



// array iteration using maping

var foods = ["Cake", "Ice-cream", "Chocolates"];
let numbers = [1, 2, 3, 4, 5];

function addSomething(item) {
    return `${item} is a food`;
}

let array_res = foods.map(addSomething);

console.log(array_res);

function squareAll(item) {
    return `${item*item}`;
}
let array_num = numbers.map(squareAll);
console.log(array_num);



// array iteration using maping


// Functions


// Normal Declaration
function demo1(name) {
    console.log("Hello " + name);
}
// Function Expression
let demo2 = function (name1) {
    console.log("Hello " + name1);
}
demo1("world!");
demo2("Arman");


// Arrow function (ES6)

let demo3 = (x,y) => {
    console.log(`My name is ${x}, I studied in ${y}`);
}
demo3("Arman Hossain", "IIUC");
*/

// array iterating using forEach

// var foods = ["Cake", "Ice-cream", "Chocolates"];
// var numbers = [1, 32, 31, 2];

// 1st parameter: item
// 2nd parameter: index
// 3rd parameter: whole array

/*
foods.forEach(function (value, i, abc) {
    console.log(`index : ${i} , item : ${value}`);
    console.log(abc);
});

// declaring funtion outside of forEach loop


// function printArray(item, i, fullArray) {
//     console.log(`index : ${i}, item : ${item}
//     ${fullArray}`);
// }
// foods.forEach(printArray);

// foods.forEach(function (value) {
//     console.log(value);
// });

let printEverything = function (value, i, abc) {
    console.log(`Indes ${i} item ${value}
${abc}`);
};

foods.forEach(printEverything);
*/

/*
function addNum(a = 0, b = 0) {
    // console.log(a + b);
    return a + b;
}
//addNum(5, 6); // 11
console.log(addNum(6, 6));


// Built in Function

function saySomething() {
    console.log("Hello!");
    
}
for (var i = 0; i < 3; i++){
    saySomething();
}


function test() {
    alert("Hello");
}
test();


function temp(x) {
    console.log(`Hello ${x}`);
}
let val = "Arman";
temp(val);


function Name(fName, lName) {
    console.log(`Hello ${fName} ${lName}`);
}

let firstName = "Arman";
let lastName = "Hossain";
Name(firstName, lastName);
*/



