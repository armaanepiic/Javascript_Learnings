// Global Scope
var a = 1;
let b = 2;
const c = 3;
// var d = 100;
 
console.log(`Global Scope : `, a, b, c);

// function scope
function test() {
    var a = 4;
    let b = 5;
    const c = 6;
    var d = 100;
    console.log(`Funtion scope: `, a , b, c);
}
test();

console.log(`Global Scope : `, a, b, c);

if (true) {
    var a = 7;
    let b = 8;
    const c = 9;
    console.log(`If scope: `, a, b, c);
}
console.log(`Global Scope : `, a, b, c);

// if scope changes the value declared using var keyword
for (var a = 0; a <= 15; a++){
    console.log(`Loop: `, a);
}

console.log(`Global Scope : `, a, b, c);
