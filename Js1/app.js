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
/*
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

















