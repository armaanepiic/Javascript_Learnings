// Error Handling

let a = 2;

try {
    if (a > 15) throw "Too Big";
    else if (a < 5) throw "Too Small";
} catch (err) {
    console.log(err);
}


/*
console.log("Before Error!");

try {
    // test();
    // undefined.test();
} catch (err) {
    console.log(err.message);
    console.log(err.name);
} finally {
    console.log("I am inside finally");
}
console.log("After Error!");
*/