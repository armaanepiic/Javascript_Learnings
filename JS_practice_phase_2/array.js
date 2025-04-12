var countries = ["Bangladesh", "UK", "Palestine", "Peru"];
countries[1] = "Poland"; // array is mutable


// adding element at the end of the array
countries[countries.length] = "Norway";
// push
countries.push("Ireland");
// pop
countries.pop();

// shift to delete from the beginning
countries.shift();

// unshift to add at the beginning
countries.unshift("Bangladesh");

var numbers = [];

// console.log(numbers);


// var length = countries.length;
// console.log(length);

// console.log(countries);
// countries.forEach(element => {
//     console.log(element);
// });


// string to array
var x = "I live in Bangladesh";
var y = x.split(' ');
x = "Bangladesh, China, Finland";
y = x.split(', ');
var z = y;
x = z.toString(); // insert comma
x = z.join(' '); // make a string inserting white space

const cars = new Array("BMW", "Audi", "Volvo");
console.log(typeof cars);


console.log(z);

console.log(x);
