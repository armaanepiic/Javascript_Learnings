// Set
/*
let mySet = new Set([1, 2, 2, 2]);
// Add
mySet.add("hello");
// clear
// mySet.clear();
// mySet.delete(2);
// console.log(mySet.has(1));
// console.log(mySet.size);
// console.log(mySet);

// iterating set
for (let [x] of mySet.entries()) {
    console.log(x);
}
for (let x of mySet.keys()) {
    console.log(x);
}

let iter = [...mySet.keys()];
console.log(iter);

// entries
// let iter = mySet.entries();
// console.log(iter);
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());

mySet.entries().forEach((keys) => {
    console.log(keys);
})
*/
// Map

let myMap = new Map([
  ["first key", 10],
  ["second key", "Arman"],
]);
console.log(myMap);
// add
myMap.set("third key", "Hello world");
console.log(myMap);

console.log(myMap.get("second key"));

for (let [x,y] of myMap) {
    console.log(x, y); // key value
}
// keys
for (let x of myMap.keys()) {
    console.log(x);
}
// values
for (let x of myMap.values()) {
    console.log(x);
}

// entries

for (let x of myMap.entries()) {
  console.log(x);
}

myMap.forEach((x,y) => {
    console.log(x,y);
});

var arr = Array.from(myMap);
console.log(arr);

var arr = Array.from(myMap.keys());
console.log(arr);

var arr = Array.from(myMap.values());
console.log(arr);

