
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