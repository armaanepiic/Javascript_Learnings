
var countries = ["Oman", "Poland", "Bangladesh", "China"];
console.log(countries);
countries.sort();
console.log(countries);
countries.reverse();
console.log(countries);






/*
// splitting array into string

var x = ["USA", "UK", "UAE"];
var z = x.toString(x);
x = "Bangladesh is a country";
z = x.split(" ");
var y = z.toString(); // Bangladesh,is,a,country
y = z.join(" "); // Bangladesh is a country


console.log(y); 




// spliting string to an array
var x = "Bangladesh";
var y = x.split(""); // (10) ['B', 'a', 'n', 'g', 'l', 'a', 'd', 'e', 's', 'h']
y = x.split(); // (1) ['Bangladesh']
x = "Hello world!";
y = x.split("");
x = "Bangladesh is a country";
y = x.split("n"); // (3) ['Ba', 'gladesh is a cou', 'try']
y = x.split(" ") // (4) ['Bangladesh', 'is', 'a', 'country']\
x = "USA, UK, UAE";
y = x.split(",") // (3) ['USA', ' UK', ' UAE']

console.log(y); 

// declaring an empty array
var numbers = [];
numbers.push(12);
numbers.push(15);
console.log(numbers.length);





var countries = ["Bangladesh", "USA", "UK"];

console.log(countries.length);
console.log(countries[0]); // Bangladesh
console.log(countries[1]); // USA
console.log(countries[2]); // UK

// replace
countries[2] = "Poland";
console.log(countries); // ['Bangladesh', 'USA', 'Poland']
// new item inset using length
countries[countries.length] = "Norway";
console.log(countries); // ['Bangladesh', 'USA', 'Poland', 'Norway']
// insert using push
countries.push("India");
console.log(countries); // ['Bangladesh', 'USA', 'Poland', 'Norway', 'India']

countries.pop();
console.log(countries); // (4) ['Bangladesh', 'USA', 'Poland', 'Norway']

countries.push("Chine", "Japan");
console.log(countries); // (6) ['Bangladesh', 'USA', 'Poland', 'Norway', 'Chine', 'Japan']

// eleminating from beginning
countries.shift();
console.log(countries); // (5) ['USA', 'Poland', 'Norway', 'Chine', 'Japan']
// adding in the beggining
countries.unshift("Pakistan");
console.log(countries); // (6) ['Pakistan', 'USA', 'Poland', 'Norway', 'Chine', 'Japan']
*/