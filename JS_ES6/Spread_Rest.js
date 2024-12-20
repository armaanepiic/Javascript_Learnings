// spread operator
/*
// spread on string
let str = "Bangladesh";
let newStr = [...str];
console.log(newStr);

// spread on array
let fruits = ["Apple", "Orange", "Banana"];
let cars = ["Audi", "BMW", "Ferrari"];
let country = "USA";

let newArr = [...fruits, ...cars, country];
console.log(newArr);

// spread on object
let person = {
    fname: "arman",
    lname: "hossain"
}
let newPerson = { ...person , dob: "30-04-1997"};
console.log(newPerson);
*/

let numbers = [12, 1, 0, -2];
console.log(Math.max(numbers)); // NaN
console.log(Math.max(...numbers)); // 12

let name = ["Arman", "Hossain"];
let test = (fname, lname) => {
    console.log(`Hello ${fname} ${lname}`);
}
test(...name);