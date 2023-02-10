
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

// delete the starting element in your array using the shift system, it deletes the starting value and shifts one to the right
assorted.shift();
console.log(assorted);

// how to add an item in the beginning in JS array, it creates a container one to the left 
assorted.unshift("krishna!");
console.log(assorted);

console.log("---------");
// how to iterate through the loop? you can use the arrayName.length to get the size of the array
// first approach 
for(var i = 0; i < assorted.length; i++)
{
    console.log(assorted[i]);
}

// for each loop, goes to every index and then it performs its task.
function logValues(value){
    console.log(value);
}
assorted.forEach(logValues)

// another way to iterate through
console.log("---------");
var books = ["freedom", "cycle", "run forever"];
books.forEach(function (books, index) { console.log(books, index)})

// like for each, we have a map function
books.map(function(book){
    console.log("Output from map", book);
})

var nums = [1, 2, 3, 4, 5];
// return an array which stores squares of numbers

// using the for each loop
// function squareValues(value){
//     console.log(value * value);
// }
console.log("--------");
// for each functions do not return anything
nums.forEach(function (num, index){
    var sq = num * num;
    nums[index] = sq;
});
console.log(nums);


// map functions return value unlike the forEach function above
// this map returns an array
var output = nums.map(function (value){
    return value * value;
});

console.log(output);

// use the splice array command to delete the value at a certain index
var nums = [4, 8, 10, 12];
nums.splice(1, 1); // delete the value at index 1 of the nums array
console.log(nums);

// use splice to delete a particular element