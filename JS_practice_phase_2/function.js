// // normal declaration

// function saySomething() {
//     console.log("Hello!");
//     console.log("I am learning Javascript");
//     console.log("Bohubrihi");
// }

// let value = saySomething();
// console.log(value);
// // This function logs 3 lines to the console but does not return anything — no return statement.


// saySomething();

// // function expression
// let saySomething1 = function (name) {
//     console.log('Hello ' + name);
// }
// saySomething1('arman');

// // arrow function

// let saySomething2 = (name) => {
//     console.log('I am am ' + name);
// }
// saySomething2('javascript');

// forEach loop

// var foods = ['cake', 'orange', 'apple', 'banana'];
// // item, index, whole array -> parameter
// foods.forEach(function (el, ind, arr) {
//     console.log(`index ${ind} -> ${el}`);
//     console.log(arr);
// });

// array iteration using mapping
var foods = ["cake", "orange", "apple", "banana", "breads"];
function addSomething(item) {
    return `${item} is a food`;
}
var newArray = foods.map(addSomething);
console.log(newArray);

var numbers = [1, 2, 3, 4, 5];
function addSquare(item) {
    return `${item * item}`;
}
var squaredNumbers = numbers.map(addSquare);
console.log(squaredNumbers);









