let counter = 0;

const getData = () =>{
    console.log("Fetching data .........", counter++)
}

const doSomeMagic = (fn, d)=>{
    let timeArg;
    return function(){
        let context = this,
        arg = arguments;
        clearInterval(timeArg);
        timeArg =  setTimeout(()=>{
            getData.apply(context, arguments)
        },
    d)
    }
}


const betterFunction = doSomeMagic(getData, 300);






