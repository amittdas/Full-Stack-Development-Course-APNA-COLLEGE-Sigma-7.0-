const student = {
    name: "Amit",
    marks: 99,
    prop: this,      // global scope
    getName: function(){
        console.log(this)
        return this.name;
    },
    getMarks: () => {
        console.log(this)       // parent scope
        return this.marks;
    }
    
}

console.log(student.getName())
console.log(student.getMarks())