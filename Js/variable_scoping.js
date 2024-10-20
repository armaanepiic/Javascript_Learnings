// Global Scoping

var a = 1;
let b = 2;
const c = 3;
let d = 10;

console.log(`Global Scope: `, a, b, c);


// function scope
function test() {
    var a = 4;
    let b = 5;
    const c = 6;
    let p = 20;
    console.log(`Function Scope: `, a, b, c, d); // d is accessible
}


test();
console.log(`Global Scope: `, a, b, c);


// if scope
if (true) {
    var a = 7;
    let b = 8;
    const c = 9;
    console.log(`if Scope: `, a, b, c);
    // if scope can change variable using var
}
console.log(`Global Scope: `, a, b, c); // p is not accessible

for (var a = 0; a < 10; a++){
    console.log(`Loop: `, a);
}
console.log(`Global Scope: `, a, b, c); // var a = 10
// if we declare a using let it doesnt changed in if and function scope







