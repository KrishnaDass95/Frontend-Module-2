// function multiply(a, b = 10){
//     return a*b;
// }
// console.log(multiply(4)); // don't need to pass b as default value given is 10
// console.log(multiply(4,5)); //  default value gets over-ridden by the argument given here


// common coding question
// function sum(a, b = 45){
//     var c = 10;
//     console.log("inside function", a + b);
// }
// console.log(c);
// sum(20);
// console.log(c); 
// var keyword makes a variable as function scoped if defined inside a function.
// var keyword has global scope if defined globally 


// function expression
// in JS, function can be stored in a variable
var division = function div(a,b){
    return a/b;
}
console.log(division(10,5));
// you can't call div function, you have to call the
// fn directly


// there is no need for the function name inside
// the function defined in a variable
var multiply = function (a,b){ // this is known as anonymous functions in JS
    return a*b;
}
console.log(multiply(10, 2)); 
// multiply becomes a function

// special type of function to prevent hoisting
// read about iife functions, its not used a whole lot



// rest operator in JS
// if you want to take as many params as possible
// we can do the following
function sum(...args){
    console.log(args);
}

sum(1,2,3,4,5,6,7,7,8,9); // you can pass whatever number of arguments and the function can take any number of parameters

// spread operator
// lets say we want to copy from an array a to array b
hello = [1, 2, 3, 4, 5];
hi = [...hello];
console.log(hi); 
// now if you do a hi.push, it only updates hi and not hello

// however if you do 
x = [1,2,3,4,5]
y = x;
// if you do a y.push(value), it updates both x and y, which is what we don't want



// function doSomething(a){
//     console.log(c);
// }

// function math(a,b){
//     return doSomething(4);
// }
// math(); // now this will throw an error c is not defined.



function doSomething(a){
    console.log(c);
}

function math(a,b){
    try{
        return doSomething(4);
    }
    catch(error){
        console.log("error in doSomething function");
    }
    finally{
        console.log("finally is invoked");
    }
    // when there's error, catch and finally runs
    // when there's no error, only finally runs(apparently finally is not used in the industry much)
}
math();