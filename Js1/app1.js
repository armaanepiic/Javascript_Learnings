
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
// let mass = 0;
// let totalMass = characters.map(el => {
//   mass += Number(el.mass);
// });
// console.log(mass);

let totalMass = characters.reduce(function (acc, el) {
  return (acc += Number(el.mass));
}, 0);
let totalHeight = characters.reduce(function (acc, el) { return (acc += Number(el.height)) }, 0);

let totalCharacterInNames = characters.reduce(function (acc, el) {
  let newstr = el.name.split(' ').join('');
  return (acc += newstr.length);
}, 0);

let eyeColor = characters.reduce(function (acc, el) {
  if (acc[el.eye_color])
    acc[el.eye_color]++;
  else
    acc[el.eye_color] = 1;
  return acc;
}, {});
console.log(eyeColor);
let str = "Hello World";
let count = str.split('').reduce(function (acc, el) {
  if (el != ' ') {
    if (acc[el])
      acc[el]++;
    else
      acc[el] = 1;
  }
  return acc;
},{});
console.log(count);



// let newStr = characters[0].name.split(' ').join('');
// console.log(newStr);
// console.log(totalMass);
// console.log(totalHeight);
// console.log(totalCharacterInNames); 

/*
let arr = [1, 2, 3];
let result = arr.reduce(function(acc, el){
  return (acc += el);
  // console.log(acc);
  
},0);
console.log(result);


let arr = [2, 1, 22, 534, 12, 124, 64, 39, 20, 44, 88];
// ascending sort
arr.sort((a, b) => {
  return a - b;
})
console.log(arr);



// every, some // return boolean (true, false)

let arr1 = [2, 4, 6];
let allEven = arr1.every(el => {
  return el % 2 == 0;
});
console.log(allEven);

let arr2 = [1, 4, 6];
let allOdd = arr2.some(el => {
  return el % 2 == 1;
});
console.log(allOdd);

// -------------------------------------------------------------------

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
});
let blueEyes = characters.filter(el => {
  return el.eye_color == 'blue';
});
console.log(massGreater100);
console.log(heightLessThan200);
console.log(male);
console.log(female);
console.log(blueEyes);



// -------------------------------------------------------------------



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
