const classInfo = {
    Amit : {
        grade: "A",
        city: "Kolkata"
    },
    Raj : {
        grade: "B",
        city: "Delhi"
    },
    Aneet : {
        grade: "A++",
        city: "Mumbai"
    }
}

console.log(classInfo)

console.log(classInfo.Amit)
console.log(classInfo.Raj)
console.log(classInfo.Aneet)

console.log(classInfo.Amit.city)
console.log(classInfo.Raj.city)
console.log(classInfo.Aneet.city)

console.log(classInfo.Amit.grade)
console.log(classInfo.Raj.grade)
console.log(classInfo.Aneet.grade)

classInfo.Aneet.city = "Kolkata"
console.log(classInfo)