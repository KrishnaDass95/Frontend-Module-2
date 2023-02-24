/**
 * If we have to onboard students into our website
 * we will add their details to a student object to store their data
 * But there can be problems when there are duplicate keys(people with the same name for instance)
 * JS does not store duplicate keys, if you have duplicate keys, whichever code is in the bottom, it overrides
 * the key before it
 */

/**
 * We can solve the above problem using Symbols
 */

// Symbols are used to create unique instances of a similar value, its a primitive data type with a unique value to seperate two values that are similar
// this value gets attached to the object to create the uniqueness
const student1 = "Krishna";
const student2 = "Krishna";
console.log(student1 === student2); // True, === compares value and then data type

// But the goal is now to seperate these two Krishna's as there can be multiple students with the same name
const student3 = Symbol('Krishna');
const student4 = Symbol('Krishna');
console.log(student3 === student4); // Will print false 

// use a constructor function to initialise new students with unique names
function CreateStudent(name, age, module, dob){
    const SymbolName = Symbol(name);
    this[SymbolName] = name;
    this.age = age;
    this.module = module;
    this.dob = dob;
    return this;
}


const student = {
    Tushar: {
        age: 24,
        module: 'frontend',
        dob: 'march'
    },
    student3: {
        age: 24,
        module: 'frontend',
        dob: 'march'
    },
    student4: {
        age: 24,
        module: 'frontend',
        dob: 'march'
    }
}
console.log(student.student3);
const ankita = new CreateStudent("ankita", 24, "backend", 100);
student.ankita = ankita;
console.log(student);
