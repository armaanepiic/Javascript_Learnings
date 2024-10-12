// Primitive Types
// number, string, boolean
// deals with value
// different address

let a = 7;
let b = a;
a = 45;
console.log(b); // 7

// referece types
// array, object
// same address
let numbers = [1, 2, 3];
let newNumbers = numbers;
console.log(newNumbers);
numbers[1] = 5;
console.log(numbers); //  numbers changed
console.log(newNumbers); // newNumbers also changed



/*
// objects
var arr = [10, 20, ["a", "b", ["UK", "USA"], "c"], 30, 40];

arr = [1, 2, ["a", "b"], { prop1: "item 1", prop2: "item 2" }];

console.log(arr[3].prop2); // item 2
console.log(arr);
// console.log(arr[2][2][0]); // UK

console.log(null == undefined); // t
console.log(null === undefined); // f
var a = 15;
var b = "";
console.log(a == b); // f
console.log(null == ""); // f
console.log(undefined == ""); // f
var c = "abc" / 10;
console.log(c); // NaN
console.log(NaN == null); // f







var student = {
    Name: "Arman Hossain",
    Age: 27,
    Contact: "01874015451",
    City: "Chittagong",
    Country: "Bangladesh"
}
console.log(student["Name"]);
console.log(student.Age);
student["Occupation"] = "Tution";
console.log(student);
student["weight"] = "70kg";
console.log(student);

delete student.Age; 

student = {};
console.log(student);
student.name = "Nusrat";
student.age = "25";
student.City = "Ctg";
console.log(student);
*/