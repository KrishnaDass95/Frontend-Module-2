
var marks = [];
marks.push(100);
marks.push(200); // how to add values to the end of the array

console.log(marks);

marks.pop(); // remove the last value from the array

console.log(marks);

// now your array is of size 1 and you initiliase a value at 4th index, index 1, 2 and 3 will be initialised to empty
marks[4] = 500;
console.log(marks); // [ 100, <3 empty items>, 500 ] ouput

// you can also have multiple data types inside the array
var assorted = ["krishna", 100, undefined];
console.log(assorted);