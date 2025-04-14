let val;

val = Math.PI; // 3.141592653589793
val = Math.E; // 2.718281828459045
val = Math.round(3.2); // 3
val = Math.round(3.5); // 4
val = Math.round(3.7); // 4
val = Math.ceil(3.4); // 4
val = Math.floor(3.4); // 3
val = Math.sqrt(81); // 9
val = Math.abs(3); // 3
val = Math.abs(-3); // 3
val = Math.pow(2, 3); // 8
val = Math.min(1, -3, 7, 9); // -3
val = Math.max(1, -3, 7, 9); // 9
val = Math.floor(Math.random() * 100 + 1); 


// console.log(val);

// Date Object
let value;
let today = new Date();
value = toString(today);
let birthday = new Date('08-26-1996 11:25:27');
birthday = new Date('August 26 1996');
birthday = new Date('8/26/1996');
value = birthday;
value = today.getMonth();
value = today.getDate();
value = today.getDay();
value = today.getFullYear();
value = today.getHours();
value = today.getMinutes();
value = today.getSeconds();
value = today.getMilliseconds();
value = today.getTime(); // timestamp
// timestamp = amount of seconds past since jan 1st 1970
birthday.setDate(30); // August 30 1996
birthday.setMonth(3); // Apr 30 1996


// console.log(value);
console.log(birthday);


