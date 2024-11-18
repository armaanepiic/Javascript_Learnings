// Factory Function
function createPerson(name, age, location) {
    return {
        name,
        age,
        location,
        sayHello() {
            console.log("Hello " + name);
        }
    };
}
let person1 = createPerson("Arman", 26, "Chattogram");
let person2 = createPerson("Nusrat", 24, "Sitakund");
let person3 = createPerson("Jane", 20, "USA");

console.log(person1);
console.log(person2);
console.log(person3);
