// function a(){
//     for(var i = 1; i<=5; i++){
//         function close(x){
//             setTimeout(() => {
//                 console.log(x)
//             }, x * 1000);
//         }
//         close(i)
//     }
//     console.log("Hi my name is javaScript")
// }
// a();

// here var is global scope and the value of i wont have different copy if we do not use closure as above and it will print the value after 5 that is 6 every time.






// we can access with let because let has block scope and every time value of m will be different 

function h(){
    for(let m =1; m<=5; m++)
    {
        setTimeout(()=>{
            console.log(m)
        }, m*1000);
    }
}
h()