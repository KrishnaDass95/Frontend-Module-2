// object syntax
var book = {
    name: "freedom from the known",
    author: "Jiddu Krishnamurti",
    releaseYear: 2000
}
console.log(book);

// empty objects can be created in 3 ways
var students = {};
// var students = new Object();
// var obj = Object.create(null);

students.name = "Krishna"; // one way to add
students["age"] = 27;
console.log(students);

// we can add entries to an object by the following way
students.name = "Ankita";
students["age"] = 45;
// console.log(students);

students.rollNum = 22;
students.name = "Ankita";
console.log(students);

// keys are unique


//printing the value of a key ion objects
console.log(students.name); // only prints the last named key

// deleting a key in JS
delete students["rollNum"];
console.log(students);


// print all keys and values of objects

// first get all keys of an object
var studentKeys = Object.keys(students);
// the function above, takes all the keys and puts it into an array
console.log(studentKeys); 

// get all values of Object
var studentValues = Object.values(students);
console.log("student values are", studentValues);

// iterate on the object and get all the keys and values
studentKeys.forEach(function(key){
    console.log(key, students[key]);
})

// printing all the keys and values of an Object movie
// interview question
console.log("--------------------");
var obj = new Object();
var movie = {};
// obj contains the information of movie bullet train
movie.name = "bullet-train";
movie.release_year = "2022";
movie.hero = "brad-pitt";

var movieKeys = Object.keys(movie);

// now loop through movieKey to get its key and value
movieKeys.forEach(function(key){
    console.log(key, movie[key]);
})


// objects inside objects
var obj = {
    user : {
        name : "Krishna",
        age: 27
    },
    isLoggedIn: true
}
console.log(obj);

// accessing objects object
console.log(obj.user.name);