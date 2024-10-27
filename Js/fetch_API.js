// similar to AJAX but latest than Ajax
// Fetch API uses javascript promise

document.getElementById("get_data").addEventListener("click", getData);



function getData() {

    // arrow function
    fetch("https://api.chucknorris.io/jokes/random")
        .then(res => res.json())
        .then(data => { console.log(data) })
        .catch(err => { console.log(er) });



    /*
    fetch("https://api.chucknorris.io/jokes/random").then(function (res) {
        return res.json();
        
    }).then(function (data) {
        console.log(data);
        
    }).catch(function (err) {
        console.log(err);
        
    })
    */
    // console.log("clicked");
    
}







