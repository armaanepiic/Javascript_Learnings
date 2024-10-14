// Functions

/*
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

var foods = ["Cake", "Ice-cream", "Chocolates"];
var numbers = [1, 32, 31, 2];

// 1st parameter: item
// 2nd parameter: index
// 3rd parameter: whole array

/*
foods.forEach(function (value, i, abc) {
    console.log(`index : ${i} , item : ${value}`);
    console.log(abc);
});
*/
// declaring funtion outside of forEach loop


function printArray(item, i, fullArray) {
    console.log(`index : ${i}, item : ${item}
    ${fullArray}`);
}
foods.forEach(printArray);



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



