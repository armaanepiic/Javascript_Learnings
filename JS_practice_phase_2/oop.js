// base class
// sub class
// inheritence

// base class
class Person {
    constructor(fName, lName, dob) {
        this.firstName = fName;
        this.lastName = lName;
        this.dob = dob;
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
    greetings() {
        return `Hello ${this.firstName} ${this.lastName}`;
    }
    static test() {
        console.log("I am static function");
    }
}
let person1 = new Person("Arman", "Hossain", "04-30-1997");
let person2 = new Person("Nusrat", "Nowmi", "02-26-1999");
let person3 = new Person("John", "Doe", "06-03-2004");

// console.log(person1.calculateAge());
// console.log(person2.fullName());
// console.log(person3);

// inheritence

// sub class
class Customer extends Person{
    constructor(fName,lName,phone,membership) {
        super(fName, lName);
        this.phone = phone;
        this.membership = membership;
    }

}
let person4 = new Person("Elon", "Musk");
console.log(person4);
console.log(person4.greetings());

let customer1 = new Customer("Rony", "Chowdhury", "018746565", "1234");
console.log(customer1);
console.log(customer1.greetings());
console.log(customer1.fullName());
console.log(Person.test()); // statis function must call from the class itself not from the object



