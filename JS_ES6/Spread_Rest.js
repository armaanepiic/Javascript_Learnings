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


let numbers = [12, 1, 0, -2];
console.log(Math.max(numbers)); // NaN
console.log(Math.max(...numbers)); // 12

let name = ["Arman", "Hossain"];
let test = (fname, lname) => {
    console.log(`Hello ${fname} ${lname}`);
}
test(...name);
*/

// Rest operator
// rest on array
let fruits = ["Apple", "Banana", "Orange", "Guava"];
let [first, second, ...rest] = fruits;
console.log(first);
console.log(second);
console.log(rest);

// rest on object
let person = {
    fname: "Arman",
    lname: "Hossain",
    dob: "30-04-1997",
    country: "Bangladesh",
    contact: "01874015451"
}
let { fname , lname,  ...others} = person;
console.log(fname);
console.log(others);

// passing as argument
let moreNum = [78, 56, -62, -46];
let test = (name, ...numbers) => {
    console.log(name);
    console.log(numbers);
}
test("arman", ...moreNum, 12, 96, 0, -14);
