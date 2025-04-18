let arr = [1, 3, 5, 2, 6, 7]

let newarr = arr.filter(arr=>{
    if(arr<3){
        return true;
    }
}) 
console.log(newarr)



let arr1 = arr.find(arr=>{
    return (arr == 3)
})

console.log(arr1)

let [a, ...rest] = [1,2,3,4,5,5,6,666,5]
console.log(rest);
console.log(a);