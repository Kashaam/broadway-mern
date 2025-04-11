const fun1 = (x)=>{
    console.log("This is fun1")
    return new Promise((res, rej)=>{
        if(x){
            res('This is res1');
        }
        else{
            rej({
                status: false,
                reason: "validation fail"
            })
        }
    })
}
const fun2 = (x)=>{
    console.log("This is fun2")
    return new Promise((res, rej)=>{
        if(x){
            res('This is res2');
        }
        else{
            rej({
                status: false,
                reason: "login fail"
            })
        }
    })
}
const fun3 = (x)=>{
    console.log("This is fun3")
    return new Promise((res, rej)=>{
        if(x){
            res('This is res3');
        }
        else{
            rej({
                status: false,
                reason: "access denied"
            })
        }
    })
}


let promiseList = [fun3(true), fun1(false), fun2(true)];

Promise.allSettled(promiseList)
  .then((results) => {
    console.log("All Settled Results:");
    console.log(results);
  })
  .catch((error) => {
    console.error("Something went wrong:", error);
  });