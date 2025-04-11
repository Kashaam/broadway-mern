const funn1 = async(x)=>{ //return type => promise
    if(x){
        return "Hello" //resolve
    }
    else {
        throw "exception" //reject
    }
}


const handle = async()=>{
    try{
        let resolve = await funn1(true);
        console.log(resolve);
    }
    catch(exception){
        console.log(exception);
    }
}

handle()








// example



const fun1 = async(x)=>{
    console.log("This is fun1")
        if(x){
            return('This is res1');
        }
        else{
            throw({
                status: false,
                reason: "validation fail"
            })
        }
    
}
const fun2 = async(x)=>{
    console.log("This is fun2")
        if(x){
            return('This is res2');
        }
        else{
            throw({
                status: false,
                reason: "login fail"
            })
        }
}
const fun3 = async(x)=>{
    console.log("This is fun3")
    
        if(x){
            return('This is res3');
        }
        else{
            throw({
                status: false,
                reason: "access denied"
            })
        }

}


const functionHandle = async()=>{
    try{
        let res1 =await fun1(true)
        console.log(res1)
        let res2 =await fun2(false)
        console.log(res2)
        let res3 =await fun3(true)
        console.log(res3);
    }
    catch(exception){
        console.log(exception)
    }
    finally{
        console.log("I am always executed");
    }
}
functionHandle();