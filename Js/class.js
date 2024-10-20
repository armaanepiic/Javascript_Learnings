// static function

class Person {
    // base class
    constructor(fname, lname) {
        this.firstName = fname;
        this.lastName = lname;
    }
    greeting() {
        console.log(`Hello ${this.firstName} ${this.lastName}`);
    }

    static test() {
        console.log("I am static function");
    }
}

let person1 = new Person("Arman", "Hossain");
console.log(person1.greeting());
console.log(Person.test());
// static function must be called from class







/*
// Class (ES6)
// class is a template for creating object
// Subclass
// inheritence

class Person { // base class
    constructor(fname, lname) {
        this.firstName = fname;
        this.lastName = lname;
    }
    greeting() {
        return `Hello ${this.firstName} ${this.lastName}`;
    }
}
class Customer extends Person {  // sub-class
    constructor(fname, lname, phone, membership) {
        super(fname, lname);
        this.phone = phone;
        this.membership = membership;
    }
    fullName() {
        console.log(this.firstName, this.lastName);
    }
}

let person1 = new Person("Arman", "Hossain");
console.log(person1);
console.log(person1.greeting());

let customer1 = new Customer("Nusrat", "Nowmi", "01886015452", "C193255")
console.log(customer1);
console.log(customer1.greeting());
console.log(customer1.fullName());


class Person {
    constructor(fname, lname, birthday) {
        this.firstName = fname;
        this.lastName = lname;
        this.dob = birthday;
    }
    
    calculateAge() {
        let birthday = new Date(this.dob);
        let diff = Date.now() - birthday.getTime();
        let ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    fullName() {
        console.log(this.firstName, this.lastName);
    }
}

let person1 = new Person("Arman", "Hossain", "04/30/1997");
let person2 = new Person("Nusrat", "Nowmi", "02/26/1999");
let person3 = new Person("John", "Doe", "09/24/1995");

// console.log(person1);
// console.log(person2);
// console.log(person3);

// console.log(person1.calculateAge());
// console.log(person2.calculateAge());
// console.log(person3.calculateAge());

console.log(person1.fullName());
console.log(person2.fullName());
console.log(person3.fullName());



let person1 = {
    firstName: "Arman",
    lastName: "Hossain",
    Dob: "04/30/1997",
    fullName: function () {
        console.log(`${this.firstName} ${this.lastName}`);
    }
}
let person2 = {
  firstName: "Nusrat",
  lastName: "Nowmi",
  Dob: "02/26/1999",
  fullName: function () {
    console.log(`${this.firstName} ${this.lastName}`);
  },
}
console.log(person1);
console.log(person2);
*/
