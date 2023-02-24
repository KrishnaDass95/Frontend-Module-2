/**
 * We have students signing up on our website and we need to store them in a database
 * they have properties like name, email, module, password as object properties
 */

// one way to do it is by creating an object manually for each student like
let krishna = {
    name: 'krishna',
    email: 'kasks@kassda.com',
    password: 'oass',
    module: 'frontend'
}
// but doing the above for every user and creating an object like this is repetitive, we can create a function to do this
function createStudent(name, email, password, module){
    let student = {};
    student.name = name;
    student.email = email;
    student.password = password;
    student.module = module;
    return student;
}
let anko = createStudent('ankita', 'smass@asdad', '21231312', 'backend');
console.log(anko);

// Constructor function, a constructor function can be invoked using a new keyword
// we can create a constructor function of any object type and its more convinient than above

// you have to capitalise the first letter of the constructor function
function Student(name, age, module, email){
    this.name = name;
    this.age = age;
    this.module = module;
    this.email = email;
}


let dass = new Student("krisna dass", 24, 'front end', 'asdas@kkk.com'); // you always need to use the new keyword to make an empty object
// everytime you use the new keyword, JS creates a an empty object {}
console.log(dass);
// all functions invoked using new keyword are constructor functions to create anything

// the goal of constructor function is to create as many objects as possible easily, it creates the object and then returns it back to you
/**
 * Reasons why we use constructor functions
 * 1. JS will handle object creation and returning the object
 * 2. JS will link it to prototype object(Not sure, upcoming class)
 */
