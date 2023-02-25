// call function or method is used to change bindings of this keyword to itself to another object

// Back to our old problem, lets add users to our platform

// function to create user
function createUsers(name, email, password, confirmPassword){
    user = {};
    user.name = name;
    user.email = email;
    user.password = password;
    user.confirmPassword = confirmPassword;
    return user;
}

// create users
const user1 = createUsers('ash', 'rona@lll.com', '123', '');
console.log(user1);
/**{
  name: 'ash',
  email: 'rona@lll.com',
  password: '123',
  confirmPassword: ''
} */
// apparently it is always good practice to separate unique data of users and the functions for users separately
const userFunctions = {
    checkPassword: function(){
        return this.password === this.confirmPassword;
    },
    printUserName: function(){
        return this.name;
    }
}

// in the above function userFunctions, it is now currently separated from the user object, but we can change the bindings
// of this keyword of userFunctions to point to user1 by using the CALL FUNCTION

const passMatch = userFunctions.checkPassword.call(user1);
console.log(passMatch); // false
const userName = userFunctions.printUserName.call(user1);
console.log(userName);