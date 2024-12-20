let iterable = "Hello";
let iter = iterable[Symbol.iterator]();

/*
The Symbol.iterator property is called on the string iterable, returning an iterator object.
This iterator object (iter) is responsible for iterating over the characters of the string.
*/

console.log(iter); // object (String iterator)
console.log(iter.next()); // value: 'H', done: false
console.log(iter.next()); // value: 'e', done: false
console.log("Bangladesh");
console.log(iter.next()); // value: 'l', done: false
console.log(iter.next()); // value: 'l', done: false
console.log(iter.next()); // value: 'o', done: false
console.log(iter.next()); // value: undefined, done: true

// custom iterable object

let fruits = ["Apple", "Orange", "Banana", "Guava"];
function customIterator(arr) {
    let i = 0;
    return {
        next: function () {
            return i < arr.length ? { value: arr[i++], done: false } : { value: "undefined", done: true };
        }
    }
}
let members = customIterator(fruits);
console.log(members.next());
console.log(members.next());
console.log(members.next());
console.log("random codes");
console.log(members.next());
console.log(members.next());

// generators

function* genFunction() {
    console.log("I am some code");
    yield 1;
    console.log("I am some code");
    // return;
    yield "Arman";
    yield 4;
    yield "Hello world";
}
let iterr = genFunction();
console.log(iterr.next());
console.log(iterr.next());
console.log(iterr.next());
console.log(iterr.next());
console.log(iterr.next());


