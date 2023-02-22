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
