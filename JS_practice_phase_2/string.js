var x = "Hello World";
x = "Hello ''d''' World";
x = 'Hello World';
x = 'Hello ""d"" World'
x = "Hello \"\" World";
x = 'Hello \'\' World'
x = "Backslash = \\";
x = "Hello \t World";
x = "Hello \nWorld";
x = "Hello";
var y = " World";
var z = x + y;
x = 'Hello World'; // length 11
x = 'Hello \nWorld'; // length 12
z = x[0]; // z = H
z = x[19]; // z = undefined

// string methods

// str.toUpperCase()
x = "Bohubrihi";
z = x.toUpperCase();
x = "BOHUBRIHI";

// str.toLowerCase()
z = x.toLowerCase();

// str.trim()
x = "  Bohubrihi  ";
z = x.trim();
z = x.trimStart();


// str.slice()
x = "Bohubrihi";
z = x.slice(1, 4); // ohu
z = x.slice(-5, -1); // brih
z = x.slice(2); // hubrihi


// str.substr(start_index, length )
x = "Bohubrihi";
z = x.substr(3, 2); // ub
z = x.substr(3); // ubrihi

// str.replace("characters, new_characters")
x = "Bohubrihi";
z = x.replace("hu", "ba");

// str.concat
x = "ABC";
z = x.concat("EFG", "123", 567);

// str.charCodeAt()
x = "Hello";
z = x.charCodeAt(0); // 72 (Ascii Value of H = 72)

// str.trimstart()
x = "    Bohubrihi    ";
z = x.trimStart();  // Bohubrihi----
z = x.trimEnd();

// str.padStart(length, character)
x = "a";
z = x.padStart(4, '0');

// str.paddEnd()
x = 'a';
z = x.padEnd(4, '0');

// str.repeat(number of repeatation)
x = "hello ";
z = x.repeat(3);

// str.replaceAll()
x = "Cat is nice. I have a Cat";
z = x.replaceAll('Cat', "Dog");

// string to array
// str.split()
x = "Hello";
z = x.split("");
// for (let index = 0; index < z.length; index++) {
//     console.log(z[index]);    
// }
x = "I love Bangladesh";
z = x.split(' ');
// for (let index = 0; index < z.length; index++) {
//   console.log(z[index]);
// }

// str.indexOf()
x = "Please locate where 'locate' occurs!";
z = x.indexOf("locate");
// str.lastIndexOf()
z = x.lastIndexOf('locate');
// if not found it returns -1
z = x.indexOf('arman');

x = "Please locate where 'locate' occurs!";
z = x.indexOf('locate', 9);
z = x.lastIndexOf('locate', 23);

// str.match('characters')
// returns an array
x = "The rain in SPAIN stays mainly in the plain";
z = x.match('ain'); // first occurance
z = x.match(/ain/g); // globally all occurance


console.log(z);

console.log(`z = ${z}`); 
// console.log(`x = ${x}`);
// console.log(`Length of ${x} = ${x.length}`);


