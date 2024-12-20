
// define a function
function hello() {
    console.log("Hello world");
}
hello();


// arrow function
let hello = () => {
    console.log("arrow function is activated");
}
hello();


// passing parameter to arrow function
let hello = (name, age) => {
    console.log(`My name is ${name} and age is ${age}`);
}
hello("Arman", 26);

// passing only one parameter
// curly braces can be avoided
let func = item => console.log(`hello ${item}`);
func("Arman");

// let add = el => { return el + 10; }
// in case of return keyword curly braces must be used
// without return can be used
let add = el => el + 10;
console.log(add(15));


// call back function

numbers = [1, 2, 3, 4, 5, 6];
// normal method of call back function
numbers.forEach(function (item) {
    console.log(item);
});
// arrow function
numbers.forEach(element => {
    console.log(element);
});
numbers.forEach(element => {
    console.log(element*element);
});
let getSquare = (item) =>{return item * item;}
let squareNum = numbers.map(getSquare);
console.log(squareNum);
