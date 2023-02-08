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