var student = {
    fname: "Arman",
    lname: "Hossain",
    age: 26,
    location: "Chattogram",
    contact: "01874015451"
}
student.village = "kurigram"; // add a property
delete student.village; // delete a property
student = {}; // replace the existing obj and create an empty object
// student.age = 2
console.log(student);

// deals with value
let a = 7;
let b = a;
a = 6;

console.log(b);

// reference type
// array, object
let numbers = [1, 2, 3];
let newNumbers = numbers;
numbers[1] = 500;

console.log(newNumbers);

let person = {
    fname: 'arman',
    lname: 'hossain',
    dob: '30-04-1997',
    fullName() {
        return `${this.fname} ${this.lname}`;
    }
}

console.log(person.fname);
console.log(person.fullName());






