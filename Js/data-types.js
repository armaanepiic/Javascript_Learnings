
// string
var x;

// var x = "Hello "f" world"; // error
x = "Hello \"trt\" world"
x = 'Hello \'trt\' world';
x = "Hello 'good' world";
x = 'Hello "good" \\trt\\ world';
x = "hello \t world"; // \t -> tab
x = "hello \n world";
x = "Hello";
var y = " World";
var z = x + y;
x = "arman";
var z = x.toUpperCase();
var y = z.toLowerCase();
x = "   Bangla   ";
y = x.trim();
x = "Bangladesh";
y = x.slice(1, 4);  // ang
y = x.slice(-5, -1); // ades
y = x.slice(2); // ngladesh
y = x.substr(3, 3); // gla
y = x.replace("ang", "esh"); // Beshladesh
y = x.replace("a", "esh"); // Beshngladesh

var z = "desh";
x = "Bangla";
y = x.concat(z, "123"); // Bangladesh123



// console.log(x[0]); // a
console.log(x);
console.log(z);
console.log(y);
// console.log(z.length);




/*
// Numbers
var x;
x = 5; // 5
x = 3.1416; // 3.1416
x = 123e5; // 12300000
x = 123e-8; // 0.00000123
x = "34" + "45"; // 3445
x = "10" + 20; // 1020
x = 10 + "20"; // 1020
x = 10 + 5 + "45"; // 1545
x = "25" - 5; // 20
x = "35" - "5"; // 30
x = 5 / 0; // Infinity
x = Infinity; // Infinity 
x = 0xA; // 10
x = 187;
x = 3.1416;
x = 10;
var y = x.toString(2);
var y = x.toString(8);
var y = x.toString(16);
x = 3.1416;
y = x.toPrecision(8); // 3.1416000
x = 187;
y = x.toString();
var z = parseInt(y);
y = "3.1416";
var z = parseFloat(y);
x = 3.1416;
z = parseFloat(x.toString());

var x = "sfgs"; // t
x = "123"; // f
x = "123f"; // t

z = isNaN(x);

// console.log(x);
console.log(z); 
*/