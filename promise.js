
// debounce

// setTimeout(()=>{
// console.log("I am running after  1 sec")
// }, 1000)


// polling

// const interval = setInterval (()=>{
//     console.log("Every 1 sec");
// }, 1000)

// setTimeout(()={
//     clearInterval(interval);
// }, 10000)



// function count(num){   //this is wrong someway
//     if(num<=10){
//         console.log(num)
//         num++
        
//     }
//     count(num);
// }

// count(1);


// function toPrint (i){
//     console.log(i);
//     i++;
//     if(i<=10){
//         toPrint(i)
//     }
// }
// toPrint(1);






let dataTree =[
    {
        name: "Chapter 1",
        sections:[
            {
                name: "Section 1.1",
                sections: [
                    {
                        name: "Sections 1.1.1",
                        sections:[
                            {
                                name: "Section 1.1.1.1",
                                sections: null
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        name: "Chapter 2",
        sections: [
            {
                name: "Section 2.1",
                sections: null
            },
            {
                name: "Section 2.2",
                sections:[
                    {
                        name: "Section 2.2.1",
                        sections: [
                            {
                                name: "Section 2.2.1.1",
                                sections: null
                            },
                            {
                                name: "Section 2.2.1.2",
                                sections: null
                            }
                        ]
                    }
                ]
            }
        ]
    },

]




const printSection =(sections, count=1)=>{
    sections.map((sect)=>{
        console.log("\t".repeat(count)+sect.name)
        if(sect.sections){
            printSection(sect.sections, count+1)
        }
    })

}

dataTree.map((chap)=>{
    console.log(chap.name)
    if(chap.sections){
        printSection(chap.sections)
    }
})





const prom = new Promise((res, rej)=>{
    let success = true;
    if(success){
        res('It is resolved statement');
    }
    else{
        rej('It is reject statement');
    }
})

prom.then(()=>{
    console.log("In block resolve")
})
.catch((err)=>{
    console.log(err)
})



// chaining of promises
// nesting of promise is where function are dependent to each other




const function1 = (x)=>{
    console.log("we are in function1")
    return new Promise((res, rej)=>{
        if(x){
            res('This is resolve1');
        }
        else{
            rej("This is error of function1");
        }
    })
}


const function2 = (x)=>{
    console.log("WE are in function2");
    return new Promise((res, rej)=>{
        if(x){
            res("This is resolve of function2")
        }
        else{
            rej('This is reject of function2')
        }
    })
}


const function3 = (x)=>{
    console.log("WE are in function3");
    return new Promise((res, rej)=>{
        if(x){
            res("This is resolve of function3")
        }
        else{
            rej('This is reject of function3')
        }
    })
}


//nesting in promise


// function1(true).then((resolve)=>{
//     console.log(resolve);
//     function2(true).then((resolve)=>{
//         console.log(resolve);
//         function3(true)
//         .then((resolve)=>{
//             console.log(resolve)
//         })
//         .catch((reject)=>{
//             console.log(reject)
//         })
//     })
//     .catch((reject)=>{
//         console.log(reject)
//     })
// })
// .catch((reject)=>{
//     console.log(reject)
// })





//chaining in promise

function1(true)
.then((resolve)=>{
    console.log(resolve)
    return function2(false)
})
.then((resolve)=>{
    console.log(resolve)
    return function3(true)
})
.then((resolve)=>{
    console.log(resolve)
})
.catch((reject)=>{
    console.log(reject)
})