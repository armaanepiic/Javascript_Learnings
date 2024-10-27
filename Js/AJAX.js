


document.getElementById('get_data').addEventListener('click', loadJokes);
function loadJokes(e) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", 'https://api.chucknorris.io/jokes/random', true);

    xhr.onload = function () {
        if (this.status === 200) {
            let data = JSON.parse(this.responseText);
            let joke = data.value;
            // console.log(joke);
            document.getElementById('output').innerText = joke;
         }
    }

    xhr.send();
}













/*
// Asynchronus Programming
// AJAX = Asynchronus Javascript and XML

// status code
// HTTP statuses
// 200: "OK"
// 403: "Forbidden"
// 404: "Not Found"

document.getElementById("get_data").addEventListener('click', loadData);

function loadData() {

    // console.log("Button clicked");
    // create XHR object (XML HTTP REQUEST)

    let xhr = new XMLHttpRequest();
    
    // open function
    xhr.open('GET', 'Data.txt', true);
    xhr.onload = function () {
        if (this.status === 200) {
            // console.log(this.responseText);
            // var temp = this.responseText;
            document.getElementById("output").innerHTML =`<h4>${this.responseText}</h4>`;
            
        }
    }
    xhr.send();
    
    // console.log(xhr);
}

*/





