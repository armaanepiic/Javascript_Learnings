// simple calculator
console.log(`Select and Option:
1: Add
2: Substraction
3: Multiplication
4: Division`);

var x = prompt("Number 1:");
var y = prompt("Number 2:");
var option = prompt("Choose and operation:");

var result = null;

x = parseInt(x);
y = parseInt(y);
option = parseInt(option);

var xCon = isNaN(x);
var yCon = isNaN(y);
var optionCon = isNaN(option);

// console.log(xCon);

if (xCon || yCon || optionCon)
    console.log("Invalid input");
else {
    switch (option) {
        case 1: result = x + y;
            break;
        case 2: result = x - y;
            break;
        case 3: result = x * y;
            break;
        case 4: result = x / y;
            break;
        default: break;
    }
    if (result == null)
        console.log("No result");
    else
        console.log(`result = ${result}`);
}
/*
// switch
var choice = prompt();
var text;
switch (choice) {
    case "a": text = "Option 1 selected";
        break;
    case "b": text = "Option 2 selected";
        break;
    case "c": text = "Option 3 selected";
        break;
    default: text = "No option selected";
        break;
}
console.log(text);




var age = prompt();
if (age >= 50)
    console.log("Old");
else if (age < 50 && age >= 30)
    console.log("Young");
else if (age < 30 && age >= 18)
    console.log("Under 30 but above or equal 18");
else
    console.log("Under 18!");


*/











// if (false) {
//     console.log("If statement executed");
// } else {
//     console.log("Else statement executed");
// }

// console.log("End of if statement");