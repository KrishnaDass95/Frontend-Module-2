// scope is defined as where your variable is visible

// global scope - available throughout your program
var a = 10;  // by default var scope is global, if a var keyword is defined inside the if block, it is accessible outside too

if(a >= 10){
    // block scope
    var b = 95; // b is only defined here, but since its got var keyword its accessible everyhere and even outside
}


console.log(b);

// hoisting or variable hoisting is when JS moves the variable declarations to the top not initialised.
// this helps JS create the memory containers required for the variables before execution.
var c = 10;

if(c > 9){
    // d gets hoisted above, it will be undefined to use the value before declaring it.
    console.log(d);
    var d = 200;
}

// don't define a variable with let const or var and try printing it, JS will forgive you, it will by 
z = 500 // JS by default will treat this as a var variable keyword
console.log(z);

// type conversion and Type coercion in JavaScript
// string + number = string (+ is string concatenation)
var x = '1' + 5;
console.log(x);

// string - number = number ( everything except + will treat it as a number as JS is forgiving)
var x = 10 - '2';
console.log(x);
var x = 10 / '10';
console.log(x); // prints 1

// using strings for true and false
if(''){
    console.log("empty string means false"); // won't print
}
if('0'){
    console.log("0 as a string means true as only empty string is false");
}

// convert valid string number into number
var x = Number('4') + 4;
console.log(x);


// every loop has three impt things to keep in mind.
// start point, end point and step iteration 


// while loop
var loopVar = 1;

while(loopVar <= 100){
    console.log(loopVar);
    loopVar++;
}

// for loop, instead of hardcoding values, its better to put them in a variable, so it can be updated easily in one place.
// print 5 to 1
var start = 5;
var end = 1;
var step = 1;
for(var i = start; i >= end; i -= step)
{
    console.log(i);
}

function logmsg(msg, number)
{
    console.log(msg, number)
}
// in JS if you pass only one argument instead of two, it does not give an error
// infact for the missing value, it will be given the value of undefined.
logmsg("krishna");

// default value for paramter
function logHello(msg="hello"){
    console.log(msg);
}
function logHello(msg="hello", value="default"){
    console.log(msg + value);
}
logHello("krishna")

// function expression, a variable in JS can hold a function

var doSomething = function iAmDoingSomething(message){
    console.log(message);
}
doSomething("I want to do something") 
// iAmDoingSomething("can i do something?") // cannot access this function, you have to call it using the variable name above. gives a referene error

var doSomething = function (message){ // annonymous functions, a function without a name
    console.log(message);
}
doSomething("I want to do something") 

var variableFunction = function() {
    console.log("I am from variable function");
}

console.log(variableFunction);

