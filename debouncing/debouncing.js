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






// debouncing in js is when api call is made through search bar we do not need to call on every keystroke  rather 
// make some delay to call api , I mean when user stops then make a api call rather on every stroke.