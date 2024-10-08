
// Operator
// operand operator operand

console.log(2 ** 3); // 2^3 = 8
var a = 8;
a++;
console.log(a); // 9
var b = 5;
b--;
console.log(b); // 4

var a = 5, b = 7;
var c, d;
c = a++;
d = ++b;
console.log(c); // 5
console.log(d); // 8





// assignment operator

var a = 19;
var b = 12;
a = b; // a == 12;
console.log(a); // 12
var c = a + b;
console.log(c); // 24
a += 10;
console.log(a); // 22
a -= 5;
console.log(a); // 17

c %= 2;
console.log(c); // 0

var Name = "Arman";
Name += "!";
console.log(Name);





// conditional operator
var a = (1 < 8) ? "Hello" : "world";
console.log(a); // Hello

var a = 1 > 8 ? "Hello" : "world";
console.log(a); // world





// logical operator
// || -> OR operator
console.log(true || true); // t
console.log(true || false); // t 
console.log(false || true); // t 
console.log(false || false); // f
// && AND operator
console.log(true && true); // t
console.log(true && false); // f
console.log(false && true); // f 
console.log(false && false); // f
// ! NOT operator
console.log(!false) // t
console.log(!true); // f

console.log((4 > 6) || (1 < 7)); // t
console.log(4 > 6 && 1 < 7); // f
console.log((4<6) && (6>2) && !(1>-9)) // f



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

