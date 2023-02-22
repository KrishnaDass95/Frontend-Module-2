// scope chaining
// lexical environments -> lexical is in hierarcy or in order to something
// Whenever a function execution context or any context is created in the call stack, it essentially creates a lexical environment which 
// has access to its current local memory and then it has access to its parents lexical environment

function a(){
    var b = 10;
    c();
    function c(){
        console.log(b);
    }
}

a();


// block scope also follows lexical environment, it searches for the nearest parent for it to find the variable.
// a block is anything defined in curly braces {}
let x = 100;
{
    let x = 10;
    {
        // let x = 15;
        console.log(x);
    }
}
