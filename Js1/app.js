let person = {
    name: 'Arman',
    age: 26,
    location: "chattogram",
    sayHello: function () {
        console.log("Hello world");
    }
};
let str = 'location';

console.log(person.str); // undefined
console.log(person[str]); //chattogram
console.log(person['location']); // chattogram
person.interest = "Javascript";
console.log(person.interest);
delete person.location;
console.log(person.location);


