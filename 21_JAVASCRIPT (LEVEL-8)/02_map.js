// let arr = [1,2,3,4,5]

// let double = arr.map(function(el){
//     return el*2;
// })

// console.log(double);

let student = [
    {
        name: "Amit",
        marks: 95,
    },
    {
        name: "Raj",
        marks: 90,
    },
    {
        name: "Aneet",
        marks: 93,
    },
]
let gpa = student.map(function(num){
    return num.marks/10;
})
console.log(gpa);
