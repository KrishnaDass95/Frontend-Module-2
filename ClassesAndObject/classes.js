class Human{
    // to add parameters to the constructor we need to start the variables with _
    //the _ is used for variables for being initialised, its not meant to be used
    constructor(_name, _dob, _gender){
        console.log('I am a human constructor', this);
        this.name = _name;
        this.dob = _dob;
        this.gender = _gender;
    }

    // to create a function just write the function name
    speak(){
        console.log(`my name is ${this.name} and my gender is ${this.gender}`);
    }
    // getter functions, when a function is only returning a single value, you can use a getter function
    // the benefits of getter functions is that you can treat the function as a variable
    get age(){
        return this.dob * 10;
    }
    // setter functions, to set a certain value, can only set a certain value
    set updateYearOfBirth(dob){
        this.dob = dob;
    }

    static youngerComparison(obj1, obj2){
        return obj1 > obj2 ? obj2 : obj1;
    }
}


const krishna = new Human('krishna', 18, 'male');
console.log(krishna);
// I am a human constructor Human {}
// Human {}
console.log('-------');
krishna.speak();
console.log(krishna.age); // use getter function to return us a single value
krishna.updateYearOfBirth = 200;
console.log(krishna.dob);


const human1 = new Human('human1', 27, 'female');
const human2 = new Human('human2', 22, 'male');

// we now want to compare who's the younger human, 
// we are generally limited by the calling functions and variables inside objects, but its possible to create static methods
// they are methods bound to the class and not objects
console.log(Human.youngerComparison(human1, human2));