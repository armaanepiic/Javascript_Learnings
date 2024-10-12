
// For loop

// for (var i = 1; i <= 10; i++){
//   console.log(i);
// }
/*

// string
let Name = "Bangladesh";
for (var i = 0; i < Name.length; i++){
  console.log(`index : ${i} : ${Name[i]}`);
}

// array
let food = ["Cake", "Chocolate", "Ice-cream"];
for (var i = 0; i < food.length; i++){
  console.log(food[i]);
}
*/

// for-in: string/array/object
let Name = "I am learning Javascript";
let food = ["Cake", "Chocolate", "Ice-cream"];
let person = {
  name: "Arman",
  occupation: "Student",
  age: 28,
  city: "Chattogram"
};
/*
// string
for (var x in Name) {
  console.log(Name[x]) // x = index -> in = index
}
for (var x of Name) {
  console.log(x); // x = item -> of = item
}
// array
for (var x in food) {
  console.log(food[x]);
}
for (var x of food) {
  console.log(x);
}*/
// object
// object doesn't have index
// property : "value"
for (var x in person) {
  // console.log(x); // x = property
  // console.log(person[x]); // value print
  console.log(`${x} : ${person[x]}`) // property - value
}
for (var x of person) {
  console.log(x);
}


/*
// while loop

let i = 1;
let sum = 0;
let product = 1;
while (i <= 5) {
  sum += i;
  product *= i;
  i++;
}
console.log("sum = " + sum);
console.log("product = " + product);
*/







