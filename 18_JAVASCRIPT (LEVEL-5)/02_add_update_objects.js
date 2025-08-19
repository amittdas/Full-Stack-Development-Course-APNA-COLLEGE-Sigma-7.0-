const student = {
    name: "Amit",
    age: 23,
    marks: 94.4,
    city: "Kolkata"
}

console.log(student.city)
student.city = "Mumbai"
console.log(student.city)
console.log(student)

student.gender = "Male"
student.marks = [99, 87, 94]
console.log(student)

delete student.city
console.log(student)