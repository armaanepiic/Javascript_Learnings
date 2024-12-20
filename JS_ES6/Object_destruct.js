// object destructing

let person = {
    firstName : "Arman",
    lastName : "Hossain",
    dob : "30-04-1997"
}

// let fname = person.firstName;
// let lname = person.lastName;
// let dob = person.dob;
// console.log(fname,lname,dob);

// destructing
// let { firstName: fname, lastName:lname, dob } = person;
// console.log(fname, lname, dob);

function display({firstName, lastName, dob}) {
    console.log(firstName, lastName, dob);
}

display(person);