// array functions recap
var arr = [2, 3, 4, 5];
arr.forEach(function(value){
    console.log(value*value);
})
var brr = arr.map(function (value, index){
    return value * index; // map function always returns a value into an array
})
console.log(brr);

arr.splice(2);
console.log(arr);

// objects recap
var obj = {
    'name' : 'krishna',
    'age' : 24
}
console.log(obj);

var arr1 = [1,2,3,4];
var arr2 = [100,200,300];
arr2 = [...arr1];
console.log(arr2);

// array destructing -> unpacking individual array values into a variable
var[a, b] = [1, 2];
console.log(a);
console.log(b);
var[x,y,z] = [100, 200];
console.log(z); // this will print undefined

// Higher order functions are functions that recieve a function as an argument -> find, findIndex, filter are all higher order functions
// Interview questions
// find the index of a particular value in an array
var a = [1,2,3, 55, 66, 7];

// array.find function is used to find if an element is there in array, it retunrs the value, if it is not present it returns undefined

var find = a.find((item) => item == 55);
console.log(find); // returns 55

// to find index of a value in the array
 var index = a.findIndex(function (item){
    return item == 7;
 })
 console.log(index); // returns index number if value is present, if not, it prints -1


 // Interview question, print only the even numbers in an array or print only numbers in an array based on a function
 // we can use the filter function on arrays

 // filter always returns a new array

 var mixedArray = [2, 4, 6, 7, 10, 21];
 // to print only odd numbers

 var ansArray = mixedArray.filter(function(value){
    return value%2 != 0;
 })
 console.log(ansArray); // output - [ 7, 21 ]

 
// SORTING
mixedArray.sort(function(a,b){ return a-b}); // ascending
mixedArray.sort(function(a,b){ return b-a}); // descending
console.log(mixedArray);

// reduce function, its used for taking an array input of values, doing some computation of it and reducing it to a single value
console.log("----------------------------");
var newArray = [500, 5,7,8,9,9];
var iteratorSum = 0;
// reduce function takes a call back function, where we specify the initial value of the sum = 0 declared globally
// then we pass the current value, it needs to return a value. Finally, the reduce function also takes a second argument
// to initalise the iteratorSum to 0
var finalSum = newArray.reduce(function(iteratorSum, currentVal){
    console.log(iteratorSum, currentVal);
    return iteratorSum + currentVal
}, 0);
console.log(finalSum);


// return max element of an array using map reduce
console.log("----------------------------");
var maxValue = Number.MIN_VALUE;
var maxElement = newArray.reduce(function(maxValue, currentVal){
    if(currentVal > maxValue){
        maxValue = currentVal;
    }
    return maxValue;
}, Number.MIN_VALUE)
console.log(maxElement);
