 /**
  * Objects are non primitive data types, they are a collection of key value pairs
  * In other programming languages we would have OOPS and classes and objects
  * But in JS we just use objects data type to do the same functionality
  * the point of objects is, create a product obj for example and all the variables and functions should be related to the 
  * object itself, so only from the product object we can access all of the functions
  * 
  */

const { privateDecrypt } = require("crypto");

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