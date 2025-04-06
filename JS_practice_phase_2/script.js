var x = 3.1416; // 3.1416
x = 123e5; // 12300000
x = 123 * 10 ** 5; // 12300000
x = 123e-5; // 0.00123
x = "34" + "56"; // string concatanation : 3456
x = "34" + 56; // string concatanation : 3456
x = 10 + 20 + "5"; // 305 : first two parameter is number
x = "10" + "20" + 5 + 5; // 102055 : full string
x = "25" - "5"; // 20 : number
x = "25" / "5"; // 5 : number
x = "25" * "5"; // 125 : number
x = "25" * 5; // 125 : number
x = "25" % "5"; // 0 : number
x = 25 / 0; // infinity:
x = Infinity; // infinity can be assigned
x = 0xBB; // 187 : save as decimal 
x = 185;
var y = x.toString(); // "185" string
x = 3.1416;
y = x.toString(); // "3.1416" string
x = 187;
y = x.toString(2); // 10111011 string -> converted to binary
// for octal y = x.toString(8) -> string
// for hexa = y = x.toString(16) -> string
x = 12.45678;
y = x.toPrecision(3); // 12.5 string
y = x.toPrecision(10); // 12.45678000 string
x = 187;
y = x.toString(); // string
y = parseInt(y); // y = 187 number
x = "3.1416";
y = parseInt(x); // y = 3 number
x = "3.1416";
y = parseFloat(x); // y = 3.1416 number
x = 3.1416;
y = parseInt(x.toString()); // 3 number
x = "1320"; // false : number counted
x = 1320; // false : number counted
x = "abc"; // true : not number
x = "abc23t424" // true : not a proper number
y = isNaN(x);


console.log("x = " + x);
console.log("y = " + y + " " + typeof y);


