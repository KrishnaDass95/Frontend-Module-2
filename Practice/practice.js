let a = 10;
const b = 20;
{
    let a = 100;
    const b = 200;
}

function add(){
    let a = 500;
    let b = 500;
    return a+b;
}
console.log(add());