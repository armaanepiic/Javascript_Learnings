//  ES6 arrow function
/*
// function number() {
//     return 20;
// }

// let number = (m,n) => console.log(n+m);
// number(10,15);

var javascript = {
    name: "Javascript",
    libraries: ["React", "Angular", "Vue"],
    printLibraries: function () {
        this.libraries.forEach((el) => {
            console.log(`${this.name} loves ${el}`);
        });
    }
};
javascript.printLibraries();

// trythy / falsy value
let myArr = [];
if (myArr) console.log("truthy");
else console.log("falsy");


var age = 18;
let type = (age >= 18) ? "Adult" : (age > 10 ? "child" : "baby");
console.log(type);


// Array.prototype.find()
var numbers = [1, 2, 3, 4, 5, 6, 10];
let found = numbers.find((currentValue, index, arr) => {
    return currentValue > 4;
}, this);
console.log(found);
*/
class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    test() {
        console.log("Hello");
    }
    exampleFunction() {
        let arr = [1, 2, 3];
        arr.find(function () {
            this.test();
        },this);
    }
}
let student = new Student("Arman", 35);
student.exampleFunction();