var a = 1;
let b = 2;
const c = 3;
let d = 4;

console.log(`Global Scope: 
a = ${a}
b = ${b}
c = ${c}
d = ${d}`);

function test() {
    var a = 5;
    let b = 6;
    const c = 7;
    console.log(`Function Scope: 
a = ${a}
b = ${b}
c = ${c}
d = ${d}`);
}
test();
console.log(`Global Scope: 
a = ${a}
b = ${b}
c = ${c}
d = ${d}`);

if(true){
    var a = 8;
    let b = 9;
    const c = 10;
    console.log("if scope can change global value declared by var");
    console.log(`If Scope: 
a = ${a}
b = ${b}
c = ${c}
d = ${d}`);
}
console.log(`Global Scope: 
a = ${a}
b = ${b}
c = ${c}
d = ${d}`);

for (var a = 0; a <= 15; a++){
    console.log("loop : ", a);
}

// inside for loop if we use var a
// value of a will be changed
// but if we use let a
// a wil not change 

console.log(`Global Scope: 
a = ${a}
b = ${b}
c = ${c}
d = ${d}`);