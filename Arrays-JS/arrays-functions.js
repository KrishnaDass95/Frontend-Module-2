// array functions recap
var arr = [2, 3, 4, 5];
arr.forEach(function(value){
    console.log(value*value);
})
var brr = arr.map(function (value, index){
    return value * index; // map function always returns a value into an array
})
console.log(brr);

arr.splice(2);
console.log(arr);

// objects recap
var obj = {
    'name' : 'krishna',
    'age' : 24
}
console.log(obj);

var arr1 = [1,2,3,4];
var arr2 = [100,200,300];
arr2 = [...arr1];
console.log(arr2);

