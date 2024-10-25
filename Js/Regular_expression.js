// Regular Expression


let re, str;
// literal character
re = /hello/i;
re = /hell/i;
re = /llo W/;
re = /lloW/i;
re = /hello/i;


// Meta Character
re = /^/; // Must start with
re = /^hello/;
re = /^World/;
re = /hello$/; // must end with
re = /rld$/;
re = /^hello$/i; // must start and end with
re = /h.llo/; // matches any one character
re = /h*llo/; // 0 or more times
re = /he?a?llo/; // optional means e or a can exist or not but not other character
re = /hello\?/ // escaping


// Character set using Brackets[]


str = "Hello World";
str = "hello";
str = "hallo";
str = "hllo";
str = "hello?";

reTest(re, str);   


console.log(re.exec(str));

function reTest(re, str) {
    if (re.test(str)) {
        console.log(`${str} matches ${re.source}`);
    } else {
        console.log(`${str} doesn't match ${re.source}`); 
    }
}
/*

// Patern Matching Technique

let re;
let str;
re = /hello/;
re = /Hello/; // case sensitive
re = /Hello/i; // case insensitive

console.log(re);
console.log(re.source);

str = "Hello World";
str = "Again Hello World";
str = "Again Hello World Hello"; // only takes the first one

// exec() -> Return result in an array or null
let result = re.exec(str);

// test() -> true / false
result = re.test(str);

// match() -> returns array or null
result = str.match(re);

// search() -> returns index of first match or -1
str = "World"; // -1
str = "sayHello"; // 0
result = str.search(re);

console.log(result);

// replace()

let newStr = str.replace(re, " Hi");
console.log(newStr);

*/
