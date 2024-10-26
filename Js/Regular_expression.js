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
re = /hello\?/; // escaping

str = "Hello World";
str = "hello";
str = "hallo";
str = "hllo";
str = "hello?";

// Character set using Brackets []
re = /h[ea]llo/; // must be one of them inside brackets
re = /[HA]ello/;
re = /[^ha]ello/; // anything except those inside brackets
re = /^[ha]ello/; // must start with h/a
re = /[a-f]ello/;
re = /[A-Z]ello/; // start with capital letter
re = /^[A-Z]/; // first letter must be uppercase
re = /^[a-z]/;
re = /[A-Za-z]/;
re = /[0-9]ello/;
re = /^[0-9]ello/; // must start with numbers 0-9
re = /[^0-9]ello/; // not start with digit
re = /[0-9][0-9]ello/;


str = "hallo";
str = "Aello";
str = "dello";
str = "hello";
str = "dello";
str = "Fello";
str = "fello";
str = "hi 5ello";
str = "tello";
str = "12ello"; 


// quantifier braces{}
re = /hel{2}o/; // must occur exactly 2 times
re = /hel{3}o/;
re = /hel{2,5}o/; // range
re = /hel{2,}o/; // at least 2 times


str = "helllo";
str = "helllo";

// parantheses () -> Grouping
re = /^([0-9]){3}/; // first 3 character must be numbers

str = "222hello";

// Bangladeshi Phone Number checking
// must start with 0 and 1
re = /^\+8801[0-9]{9}$/;


str = "+8801874015451";

// shorthand character classes
re = /\w/; // word character, -, alpha numeric or _
re = /\w+/; // one or more
re = /\W/; // non word character
re = /\W+/; // one or more non word character
re = /\d/; // checks digit
re = /\d+/; 
re = /\D/; // non digit
re = /\s/; // space check
re = /\S/; // only white space
re = /\bHello\b/;



str = "(&v^D_";
str = "fdsfsdf_";
str = "ar4";
str = "ar4545";
str = "ar05 df";
str = " ";
str = "Hello d world"


// Assertions
re = /x(?=yz)/; // matches x only if x is before y
re = /x(?!yz)/; 

str = "abcxyspqr"
str = "dxyz";


// postal code
re = /^[0-9]{4}$/;
str = "4534";

// phone number
// 01874015451 +8801874015451 8801874015451
re = /^(\+)?(88)?01[0-9]{9}$/;
str = "+8801874015451";

// email address
// abc32.def@edu.com.bd
re = /^([a-zA-z0-9]\.?)+[^\.]@([a-zA-z0-9]\.?)+[^\.]$/;
str = "abcabc56.defdef@edu.com.bd"


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
