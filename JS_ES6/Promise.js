// Promise
// successful -> resolve
// failed -> reject
/*
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

*/

// console.log(fetch("https://api.chucknorris.io/jokes/random"));
// fetch("https://api.chucknorris.io/jokes/random").then(response => response.json()).then(data => console.log(data));
// console.log("hello world");

// async and await

fetch("https://api.chucknorris.io/jokes/random")
  .then((response) => response.json())
  .then((data) => {});

async function getJokes() {
    let response = await fetch("https://api.chucknorris.io/jokes/random");
    let data = await response.json();
    return data;
}

getJokes().then(jokes => {
    console.log(jokes.value);    
})
