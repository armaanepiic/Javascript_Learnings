// Symbol
let a = Symbol("Hello");
let b = Symbol("Hello");

console.log(a, b);
console.log(a == b); // false

let person = {
    name: "arman",
    age: 27,
    [a]: "Hello world"
}
console.log(person);
console.log(Object.getOwnPropertyNames(person));
console.log(Object.getOwnPropertySymbols(person));
console.log(JSON.stringify(person));
// console.log();
for(x in person)console.log(person[x]);






