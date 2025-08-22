let nums = [1,2,3,4,5,6,7,8,9,10]

let ans = nums.filter((el) => {
    return el%2 == 0;      //even
}
)
console.log(ans)