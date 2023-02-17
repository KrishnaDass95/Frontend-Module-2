var s = "hello"
var empty = '';

console.log(s.length);

// find the character on a given string
console.log(s.charAt(0));

// convert a given character into ascii value
console.log(s.charCodeAt(0)); // prints 104

// find the index of character/ substring
console.log(s.indexOf('l')); // first index occurance
console.log(s.indexOf('o')); // last index of o -> checks from the back
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



