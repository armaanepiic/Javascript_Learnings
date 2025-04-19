var student = {
    name: "Arman",
    age: 26,
    hometown: "Chittagong"
}
var student_json = JSON.stringify(student);
// console.log(student_json);

var student_object = JSON.parse(student_json);
// console.log(student_object);

// JSON doesn't support undefined, date, function
var person = {
    name: "Arman",
    age: 26,
    married: true,
    dob: "1997-30-4",
    test: null,
    greet: function () {
        console.log(`Hello ${this.name}`);
    }
}
var person_json = JSON.stringify(person);
// console.log(person_json);
var person1 = {
    "name": "Arman",
    "age": 26,
    "hometown": "Chittagong",
    "married": true
}
// console.log(person1);


var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var data = this.responseText;
        // console.log(data);
        jsonData(data);
    }
};
xmlhttp.open("GET", "data.json", true);
xmlhttp.send();

function jsonData(json_obj) {
    console.log(json_obj);
    var js_obj = JSON.parse(json_obj);
    console.log(js_obj);
    var persons = js_obj.persons;
    console.log(persons);
    for (var x in persons) {
        console.log(x);
        
    }
    
}