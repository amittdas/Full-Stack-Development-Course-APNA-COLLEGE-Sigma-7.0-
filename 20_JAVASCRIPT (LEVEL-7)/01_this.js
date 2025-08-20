const student = {
    name: "Amit",
    age: 23,
    math: 98,
    eng: 97,
    phy: 90,

    getAvg(){
        let avg = (this.math + this.eng + this.phy)/3;
        console.log(`${this.name} got average marks: ${avg}`);
    }
}

student.getAvg();