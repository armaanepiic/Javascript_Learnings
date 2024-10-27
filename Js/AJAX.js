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







