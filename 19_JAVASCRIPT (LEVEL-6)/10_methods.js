// const calculator = {
//     add: function(a,b){
//         return a+b;
//     },
//     sub: function(a,b){
//         return a-b;
//     },
//     mul: function(a,b){
//         return a*b;
//     }
// }

const calculator = {
    add(a,b){
        return a+b;
    },
    sub(a,b){
        return a-b;
    }
}

console.log(calculator.add(2,3));
console.log(calculator.sub(5,3));
console.log(calculator.mul(2,3));