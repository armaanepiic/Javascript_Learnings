// Promise
// successful -> resolve
// failed -> reject

let prom = new Promise((resolve, reject) => {
    let a;
    setTimeout(() => {
        a = 1 + 1
        if (a == 2) {
          resolve("success");
        } else {
          reject("fail");
        }
    }, 4000);
    
})

prom.then((message) => {
    console.log("I am from " + message);
}).catch((message) => {
    console.log("I am from " + message);
})

console.log("I am after promise");


// used in image file