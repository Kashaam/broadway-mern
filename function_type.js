const fun1 = (a)=>{
    console.log("I am in function 1");

    const fun2 = (x) =>{
        console.log("I am in function 2");
        if(x){
            console.log("X is true");
        }
        else{
            console.log("X is not true")
        }

    }
    return fun2(a)
}

let result = fun1(true);
console.log(result); //closure manage dependencies





const abc = ()=>{

}

(()=>{
    console.log("IIFE") //immediately invocable function expression
})();