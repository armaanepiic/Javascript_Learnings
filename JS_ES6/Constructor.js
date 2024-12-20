// ES5 constructor

// function Person(age, name) {
//     this.age = age;
//     this.name = name;
  
// }
// let person1 = new Person(26, "arman");
// console.log(person1);

// ES6 class

class Persons {
    constructor(age, name) {
        this.age = age;
        this.name = name;
    }
    getName() {
        console.log(this.name);
    }
}
let person2 = new Persons(27, "Nusrat");
console.log(person2);
person2.getName();

