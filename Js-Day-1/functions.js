// requirement is to print numbers from 2- 10, 40-50, 22- 25;
// instead of creating for loop 3 times, we can write one function to solve the entire thing
// they are used to execute a logic or run a code block again and again

// Syntax -> use function keyword, function name,
function forLoops(start, end, step){
    for(var i = start; i <= end; i += step)
        {
        console.log(i);
        }
}
forLoops(40, 50, 2);
// functions help with reusability

console.log("--------------------")
function addTwoNumbers(a){
    var b = 200;
    return a + b;
}
var ans = addTwoNumbers(100);
console.log(ans);
// console.log(b); you cannot print the var b as its only defined at the function scope.