


// filter
// Get characters with mass greater than 100
// Get characters with height less than 200
// Get all male characters
// Get all female characters

const characters = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
];
let massGreater100 = characters.filter(el => {
    return el.mass>100;
});
let heightLessThan200 = characters.filter(el => {
  return el.height < 200;
});
let male = characters.filter(el => {
  return el.gender == 'male';
});
let female = characters.filter(el => {
  return el.gender == 'female';
})
console.log(massGreater100);
console.log(heightLessThan200);
console.log(male);
console.log(female);





















/*

// Get an array of all names
// Get an array of all heights
// Get an array of objects with just name and height properties
// Get an array of all first names
const characters = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: "188",
    mass: "84",
    eye_color: "blue",
    gender: "male",
  },
];


let allName = characters.map(el =>  el.name);
let allHeight = characters.map(el => el.height);
let allMass = characters.map(el => el.mass);

class Obj {
    constructor(name, height) {
        this.name = name;
        this.height = height;
    }
}
let newArr = characters.map(el => {
    const person = new Obj(el.name, el.height);
    return person;
});
let firstName = characters.map(el => el.name.split(' ')[0]);


console.log(allName);
console.log(allHeight);
console.log(allMass);
console.log(newArr);
console.log(firstName);
*/