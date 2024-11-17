
let person = {
    name: "Arman",
    age: 25,
    interest: ['JS', 'C++', 'Python'],
    address : {
        city: 'Chattogram',
        zip: 4214,
        showAddr() {
            console.log(this);
        }
    },
    sayHello() {
        console.log('Hello ' + this.name);
    },
    showInterest() {
        this.interest.forEach((el) => {
            console.log(el, this.name);
            
        })
    }
};
person.address.showAddr();




