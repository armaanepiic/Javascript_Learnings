
// comparison operator
console.log(4 == 4); // t
console.log(3 == 4); // f
console.log("abc" == "abc"); // t
console.log("abc" == "def"); // f
var a = 5, b = 2;
console.log(a == b); // f
console.log(4 == "4"); // t  it considers number, dont data type
console.log(4 === "4"); // f  it considers the data type & value both
console.log(4 != 5) // t the value is not equal
console.log(4 != 4) // f the value is equal
console.log(4 != "4"); // f it considers the value
console.log(4 !== "4") // t data type is dfrnt but value same
console.log(4 > 2); // t
console.log(4 >= 2) // t
console.log(4 > 5); // f
console.log(4 >= 5); // f

var a = (4 > 2);
console.log(`a = ${a}`); // a = true
var a = (4 < 2);
console.log(`a = ${a}`); // a = false



/*
// normal operator

var line1 = "Hello", line2 = "world";

console.log(line1 + " " + line2); // Hello world

console.log(36 + "hello"); // 36hello

console.log(36 + 4); // 40

console.log("hello" + 36 + 4); // hello364

console.log(36 + 4 + "hello"); // 40hello

console.log("45" - "5"); // 40 (number)

console.log("45" + "86"); // 4586 (string)

console.log("45" - "abc"); // NaN

*/