var s = "hello"
var empty = '';

console.log(s.length);

// find the character on a given string
console.log(s.charAt(0));

// convert a given character into ascii value
console.log(s.charCodeAt(0)); // prints 104

// find the index of character/ substring
console.log(s.indexOf('l')); // first index occurance
console.log(s.indexOf('o')); // last index of o -> checks from the end
console.log(s.indexOf('ll')); // index of substring ll

//check if a substring exists
console.log(s.search('ll')); // returns index
console.log(s.includes('krishna')); // returns true or false 

// check if a string starts or ends with something
console.log(s.startsWith('kris'));
console.log(s.endsWith('lo'));
 
// convert to upper and lower case
console.log(s.toLowerCase());
console.log(s.toUpperCase());

// get a substring from a string
console.log(s.slice(0, 4)); // add one extra for the end
console.log(s.substring(0, 5)); // same as above

// take a sentence and print the words
var sentence  = "this is a string string ring";
var words = sentence.split(' '); // [ 'this', 'is', 'a', 'string' ]
console.log(words);
// when de-limitor is not found by the split function, it spits out each character

// replace all instances of  a substring in a string
var str = sentence.replace("string","krishna"); // only replaced the first instance
console.log(str);

// use replace ALL for all instances
// var str2 = sentence.replaceAll("string", "krishna bro"); // not working as of now

// delete certain substring in a sentence
var sentence2 = "hi my name is broooo";
console.log(sentence2.replace("hi","")); // the second argument is a empty string

// Using RegEX for replacing all the values with the replace function, not just the first function
// basic RE
var sentence = "we are going are going are going are laughing are playing";
var regularExp = /are/g; // g here means at global scope
var finalString = sentence.replace(regularExp, "is");
console.log("regex->", finalString); // regex-> we is going is going is going is laughing is playing

// remove whitespaces in a string using TRIM function, it trims on the leading and trailing spaces, if you want to remove spaces in between
// you need to use replace all
var input = "      krishna     d";
console.log("trimmed string ->", input.trim());

// match function with regular expression, in regex, you can add flags for anything you want to match
// like case insensitive etc
var sentence3 = "hi is IS is helllo is is Is iS bro";
var matchRegEx = /is/g;
console.log("match with regex ->", sentence3.match(matchRegEx)); // match with regex -> [ 'is', 'is', 'is', 'is' ]
matchRegEx = /is/gi; // g means global scope and i means case insensitive
console.log("match with regex with case insensitive ->", sentence3.match(matchRegEx)); 
// match with regex with case insensitive -> [
//     'is', 'IS',
//     'is', 'is',
//     'is', 'Is',
//     'iS'
//   ]
// practice at regexr.com 

// regex with numbers, find all the numbers in a string,
var numbersWithString = "my phone number is 1233439384848 and your dads number is 1484472828110";
// now we want to select the numbers from this string, it can be done by RegEx

// you can group the numbers you want to find with square brackets
var numberRegEx = /[1-9]+/g; // the plus here indicates, it finds a group of numbers togther
// if there is no +, it will find the digits individually

console.log("finding numbers among string ->", numbersWithString.match(numberRegEx)); 
// finding numbers among string -> [ '1233439384848', '148447282811' ] -> output

// regex negation -> try later
// var numberRegExNegation = /^[1-3]+


// extract using all capital letters using RegEx
var sentence4 = "THIS is SPARTA";
console.log(sentence4.match(/[A-Z]+/g)); // output -> [ 'THIS', 'SPARTA' ]

// regex with . operator which helps with characters before and after, one . is one character 
console.log(sentence4.match(/..is.../gi)); // [ 'THIS is' ]
// every character after a first match using a * characet
console.log("* regex-> ",sentence4.match(/S.*/g)); // * regex->  [ 'S is SPARTA' ] output
// you can build complex regex, yo





