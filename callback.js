// function hey(man, callback){
//     console.log(`Hey ${man}`);
//     callback()
// }

// hey("kasham", ()=>{
//     console.log("Are you okay")
// })














// const funct1 = (cb) =>{
//     cb();
// }

// const fun3 = ()=>{
//     console.log("I am in fun3");
// }

// funct1(fun3)

// funct1(()=>{
//     console.log("I am in function 1");
// })






// const num = [1, 2,3,4,5,6,7,8,9,10,11,12,13]
// const arr = [];
// for(let i = 0; i<num.length; i++){
//     if(num[i]%2 == 0){
//         arr.push(num[i]);
//     }
// }

// console.log(arr)


// let evenNumber = num.filter((vsl)=>(vsl % 2 === 0));
// console.log(evenNumber)





// factorial
let num = 6
let factorial =[...Array(num).keys()].reduce((acc, curr)=>{
    return acc * (curr + 1);
    
}, 1)
console.log(factorial);