function hello(a, b){
    let n = a + b;
    return n;
}


const maya = function(){
    console.log("This is function variable")
}


const raman = (a,b, c) =>{
    let m = a + b + c;
    return m;
}


let result = hello(3, 6);
maya()
let lastResult = raman(3, 5, 6);

console.log(result);
console.log(lastResult);



// hoisting

console.log(sima);
var sima = "Hello ) I am sima";





foo()
function foo(){
    console.log("This is foo");
}





let addNumbers = ()=>{
    let c = a + b;
    d = a * b;
    return c;  //cannot return multiple variable;
}
let a = 10;
let b = 20;
let d;

// if we declare a variable before calling function then that variable is global scope
let res = addNumbers();
console.log(res);
console.log(d)