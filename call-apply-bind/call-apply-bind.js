let name = {
    firstName: 'krishna',
    lastName: 'Dass',
    printFullName: function(){
        console.log(this.firstName + ' ' + this.lastName); // here the this will refer to the current object of name
    }
}
// we can create another user with another fname and lname, but what happens is that we're repeating the same function again and again
let name1 = {
    firstName: 'aa',
    lastName: 'dd',
    printFullName: function(){
        console.log(this.firstName + ' ' + this.lastName); // here the this will refer to the current object of name
    }
}

// the function printFullName is repeated, this is where we can use call function with a concept of function borrowing

// we can improve the above code to a better spot by using the call function
let name3 = {
    firstName: 'krishna',
    lastName: 'Dass',
}
// we can create another user with another fname and lname, but what happens is that we're repeating the same function again and again
// we can remove that function and create a seperate function
let name4 = {
    firstName: 'aa',
    lastName: 'dd',
}
var printFullName = function(){
    console.log(this.firstName + ' ' + this.lastName);
}
printFullName.call(name3); // every function has a call method which points to the reference, we can change the reference of this by passing
// in the object reference
printFullName.call(name4);

// now we want to pass some arguments to the fullName function by adding a hometown, it can be added by comma seperated after reference
function printFullNameAndHomeTown(hometown){
    console.log(this.firstName + ' ' + this.lastName + ' ' + 'hometown is ' + hometown);
}
printFullNameAndHomeTown.call(name3, 'bangalore'); // krishna Dass hometown is bangalore

// in the apply method, the only difference is how we pass the arguments, we send them as a list
printFullNameAndHomeTown.apply(name4, ['chennai']); // aa dd hometown is chennai

// we also have a BIND method, its like call except it does not invoke the function, just returns the copy of a function for it to be invoked later

let krishna = printFullNameAndHomeTown.bind(name3, 'telengana');
console.log(krishna); // [Function: bound printFullNameAndHomeTown]
krishna(); // krishna Dass hometown is telengana 