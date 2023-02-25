// Regular functions are hoisted, we can call the function even before declared
console.log(add(3,4));

function add(a, b){
    return a+b;
}

// to solve this problem we have function expression
// console.log(addBro(2,2)); // this will throw an error, addBro variable is hoisted but we cannot access the function before declaring it

var addBro = function (a,b){ // anonymous functions -> functions with no name
    return a+b;
}

// in the above case, function hoisting does not happen, but the variable gets hoisted, the next solution JS introduced IIFE
//IIFE is immediately invoked function expression , you write the function and it immediately gets called. 
// its not widely used, but I can look into it later. IIFE is the only way to get rid of hoisting in variable and functions

// MAIN -> ES6 released a solution to all the problems above by using Arrow functions, its also a function expression without the function keyword
// basic syntax -> variable = (arguments) => {function body}
var prod = (a,b) => {return a * b;}
console.log(prod(22, 2));

// generally arrow functions are present inside a variable or as a call back function aka higher order functions(functions that take fn as argument)
// it cannot be called just like that, it needs a reference, 
//i.e -> you cannot say (a,b) => {function body} directly without storing this function somewhere

// you can have single line functions without {} braces or return keyword

const subtract = (a, b=100) => b-a;
console.log(subtract(10)); // 90

// reducing code even further when you only have one argument
const divideByTen = a => a/10;
console.log(divideByTen(10)); // 1

// USE arrow functions everywhere as much as possible but it has one massive downside
// let's see below
const user = {
    name: 'dass',
    age: 22,
    weight: 55,
    isOverWeight: function(){
        if(this.weight > 50){
            console.log(`user ${this.name} is overweight with these kilos yo`,this.weight);
        }
    },
    isOverAge: ()=> {
        if(this.age > 20){
            console.log('overage');
        }
    }
}
user.isOverWeight();

// in the above example of object user, the this keyword inside the function of key isOverWeight will 
// refer to the user object but if you use the arrow function there instead, it will point to the global window object instead

user.isOverAge(); // will not work with the above explanation, as arrow functions do not store the reference of the object but it holds reference of global object 

// the above is drawback of arrow functions,  binding of this keyword is lost














