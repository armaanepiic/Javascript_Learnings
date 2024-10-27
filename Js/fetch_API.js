
// Callback Function

// document.getElementById("get_data").addEventListener('click',time);

// var time = setTimeout(function () {
//     console.log("hello world");
// }, 2000);

// synchronous way

/*

let persons = [
    {firstName: "Arman", lastName: "Hossain"},
    {firstName: "Nusrat", lastName: "Nowmi"}
]
function createPerson(person) {
    setTimeout(function () {
        persons.push(person);
    }, 4000);
}

function getPerson() {
    setTimeout(function () {
        let output = '';
        persons.forEach(function (person) {
            output += `<li>${person.firstName} ${person.lastName}</li>`;
        });
        document.getElementById('output').innerHTML = output;
    }, 1000);
}
    */

let persons = [
  { firstName: "Arman", lastName: "Hossain" },
  { firstName: "Nusrat", lastName: "Nowmi" },
];
function createPerson(person, callback) {
  setTimeout(function () {
      persons.push(person);
      callback();
  }, 2000);
}

function getPerson() {
  setTimeout(function () {
    let output = "";
    persons.forEach(function (person) {
      output += `<li>${person.firstName} ${person.lastName}</li>`;
    });
    document.getElementById("output").innerHTML = output;
  }, 1000);
}

createPerson({firstName: "Roni", lastName: "Barua"},getPerson);









/*
// similar to AJAX but latest than Ajax
// Fetch API uses javascript promise

document.getElementById("get_data").addEventListener("click", getData);


function getData() {

    // arrow function
    fetch("https://api.chucknorris.io/jokes/random")
        .then(res => res.json())
        .then(data => { console.log(data) })
        .catch(err => { console.log(er) });



    
    fetch("https://api.chucknorris.io/jokes/random").then(function (res) {
        return res.json();
        
    }).then(function (data) {
        console.log(data);
        
    }).catch(function (err) {
        console.log(err);
        
    })
 
    // console.log("clicked");
    
}

   */






