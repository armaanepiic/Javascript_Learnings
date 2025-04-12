// var choice = prompt();

// var text;

// switch (choice) {
//     case "a": text = 'option 1 selected';
//         break;
//     case "b": text = 'option 2 selected';
//         break;
//     case "c": text = 'option 3 selected';
//         break;
//     default: text = 'none selected';
//         break;
// }
// console.log(text);

// loop

let name = "I am learning Javascript";
let food = ['Cake', 'Chocolate', 'Ice-cream'];
let person = {
    name: "Arman",
    profession: "Web Developer",
    age: 26,
    country: "Bangladesh"
}
// for in : string, array, object
// string
// for (var x in name) {
//     // console.log(x); // index of string
//     console.log(`Index ${x} item ${name[x]}`);
// }
// array
// for (var x in food) {
//     console.log(food[x]);
// }
for (var x in person) {
    console.log(`property ${x} , value ${person[x]}`);
}



// for of : string, array
// for (var x of name) {
//     console.log(x);
// }
// array
// for (var x of food) {
//     console.log(x);
// }