let arr = [1,5,8,8,3,7,45,25,89,42,1000,12];

// let max = -1;
// for(let i=0; i<arr.length; i++){
//     if(max < arr[i]){
//         max = arr[i];
//     }
// }
// console.log(max)

let ans = arr.reduce((max, el) =>{
    if(max < el){
        return el;
    }else{
        return max;
    }
})
console.log(ans)