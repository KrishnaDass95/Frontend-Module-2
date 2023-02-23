 /**
  * Objects are non primitive data types, they are a collection of key value pairs
  * In other programming languages we would have OOPS and classes and objects
  * But in JS we just use objects data type to do the same functionality
  * the point of objects is, create a product obj for example and all the variables and functions should be related to the 
  * object itself, so only from the product object we can access all of the functions
  * 
  */

 // object
 var student = {name: 'krishna', age: 24, module: 'front-end2'};
 console.log(student);

 // dynamic object creation
 var user = {}; // empty object
 user.name = "Ankita";
 user.addict = "instagram";
 user.device = "phone";
 console.log(user); //{ name: 'Ankita', addict: 'instagram', device: 'phone' }

 var product = new Object();
 console.log(product);

 // one more way to add key value pairs to empty objects
 product['name'] = 'iphone';
 product['type'] = 'Phone';
 product['price'] = 67000;

 console.log(product); // { name: 'iphone', type: 'Phone', price: 67000 } 

 // deleting a key from an object
 delete product['type'];
 //delete product.name;  another way of deleting product
 console.log(product);

 // keys can store any type of data for its values like arrays, functions and objects
 product.details = ['new', '2023', 'mid-rage'];
 product.getDetails = function (){
    return "details my bro";
 };
 console.log(product);

 // storing objects inside a key 
 product.info = {
    madeIn: 'India',
    designedIn: 'Cali'
 }
 console.log(product);

 // printing a particular value of a key in two ways
 console.log("info of product ->", product.info);
 console.log("second way of product ->>", product['info']);
 // printing a key who's value is an object and printing a key of the inside object use double dots
 // aka accessing a nested object
console.log("-----nested objects-------");
 console.log(product.info.madeIn); // this is best practice though
 console.log(product["info"]["madeIn"]);
 console.log(product["info"].madeIn);


 // printing the function inside a key from earlier
 console.log(product.getDetails()); // when this is run, a function execution context of getDetails is created
 
 // accessing all the keys in an an object
 console.log("Access all the keys in the product object ---------------------");
 productKeys = Object.keys(product);
console.log(productKeys);
 
/**
 * Given an object print all its keys and values
 * 1. Get all the keys
 * 2. Iterate on all the keys
 */

productKeys.forEach(function (key) {
    console.log(key, product[key]);
})

/**
 * Given an object a, create a new object b with keys of a as value, and value of a as keys
 */
console.log("---switch keys and values of an existing object into a new object");
let b = {};

productKeys.forEach(function (item){
    b[product[item]] = item;
})
console.log(b);


// get all the values from object
console.log("------values---------");
var productValues = Object.values(product);
console.log(productValues);

// entries function which returns the function as key value pairs
const obj = {a:1, b:2, c:3};
const userEntries = Object.entries(obj);
console.log(userEntries); // [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]

// object destructuring
const user1 = {name: "krishna", age: 200};
const {age, name} = user1; // from user1 take out the name and age assign it to to a variable. You need to use the same value as the key
console.log(age, name);

// using this keyword -> refer to current object itself, 
// for example for a particular object key, we want to use the key-value pair of another 
let person = {
    name: "john",
    age: 99,
    greet: function(){
        console.log("hello my name is " + this.name + "and my age is " + this.age);
    },
    thisFun: function(){
        console.log(this);
    }
}
person.greet();
console.log("-- calling just `this`-----");
person.thisFun();
/**
 * {
  name: 'john',
  age: 99,
  greet: [Function: greet],
  thisFun: [Function: thisFun]
}
 */
