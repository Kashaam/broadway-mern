const num = (n, arr = [0,1]) =>{
    if(arr.length>=n) return arr;
    arr.push((arr[arr.length-1]) + (arr[arr.length-2]));
    return num(n, arr);
}
console.log(num(20));