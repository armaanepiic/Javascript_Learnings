// Array destructing
let fruits = ['Apple', 'Orange', "Grape"];
let [fruit1, , fruit3, fruit4] = fruits;
// console.log(fruit1); // Apple
// console.log(fruit4); // undefined

// variable swapping
let a = 10, b = 20;
// console.log(`Before swap : a = ${a} b = ${b}`);
[a, b] = [b, a];
// console.log(`After swap : a = ${a} b = ${b}`);

// object destructing
let person = {
    firstName: "Arman",
    lastName: "Hossain",
    dob: "30-04-1997"
}

function display({ firstName, lastName, dob }) {
    // console.log(firstName,lastName,dob);
}
display(person);


// spread operator
// spread on string
let str = "Bohubrihi";
let newStr = [...str];
// console.log(newStr);

// spread on array
let fruit_1  = ["Apple", "Orange", "Mango"];
let fruit_2 = ["Grape", "Lichi"];
let newFruit = "Watermelon";
let newArr = [...fruit_1, ...fruit_2, newFruit];
// console.log(newArr);

// spread on object
let person_info = {
    fname: "Arman",
    lname: "Hossain"
}
let newPerson = { ...person_info, dob: "04-30-1997" };
// console.log(newPerson);

// spread on sending parameter to a function
let numbers = [12, 2, -9, 56];
// console.log(Math.max(...numbers));

let cars = ["BMW", "Ferrari", "Audi"];
let test = (fname, lname) => {
    // console.log(`I love ${fname} & ${lname}`);
}
test(...cars);

// rest operator

let interest = ["BMW", "Ferrari", "Audi", "Marcedes", "Lamborghini"];
let [first, second, ...rest] = interest;
// console.log(first);
// console.log(second);
// console.log(rest);

let person_information = {
  fname: "Arman",
    lname: "Hossain",
    dob: "04-30-1997",
  profession: "web developer"
};
let { fname, lname, ...others } = person_information;
// console.log(fname);
// console.log(lname);
// console.log(others); // new object

// ES6 class
class Person {
    constructor(age, name) {
        this.age = age;
        this.name = name;
    }
    getName() {
        // console.log(this.name);
    }
}
let person1 = new Person(28, "arman");
// console.log(person1);
// console.log(person1.getName());

let x = Symbol();
let y = Symbol();
// console.log(x == y);
let persons = {
    name: "arman",
    age: 28,
    [x]: "Hello world"
}
// console.log(persons);
// console.log(Object.getOwnPropertyNames(persons));
// console.log(Object.getOwnPropertySymbols(persons));


let prom = new Promise((resolve, reject) => {
    let a;
    setTimeout(() => {
        a = 1 + 1;
        if (a == 2) {
            resolve("success");
        }
        else{
            reject("failed");
        }
    }, 4000);
})

prom.then((message) => {
    console.log("I am from then " + message);
}).catch((message) => {
    console.log("I am from catch " + message);
});

console.log("I am after promise");

