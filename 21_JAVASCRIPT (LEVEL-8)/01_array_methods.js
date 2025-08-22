let arr = [1, 2, 3, 4, 5];

// let print = function (el) {
//     console.log(el);
// };
// arr.forEach(print);

arr.forEach(function (el) {
    console.log(el);
}
)

let obj = [
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
console.log(obj)
obj.forEach((student) => {
    console.log(student);
}
)
obj.forEach((student) => {
    console.log(student.name);
}
)
obj.forEach((student) => {
    console.log(student.marks);
}
)