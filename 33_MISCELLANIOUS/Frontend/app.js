// let arr1 = [1,2,3];
// let arr2 = [1,2,3];

// arr1.sayHello = () => {
//     console.log("Hello, I am arr")
// }
// arr2.sayHello = () => {
//     console.log("Hello, I am arr")
// }


// FACTORY FUNCTIONS
// function personMaker(name, age){
//     const person = {
//         name : name ,
//         age : age,
//         talk(){
//             console.log(`Hi, my name is ${this.name}`);
//         },
//     };
//     return person;
// }
// let p1 = personMaker("Amit", 24);


//CONSTRUCTOR  -- doesn't return anything & start with capital letter
// function Person(name, age){
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.talk = function(){
//     console.log(`Hi, my name is ${this.name}`);
// }

//CLASS
// class person{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     talk(){
//         console.log(`Hi, my name is ${this.name}`);
//     }
// }

// let p1 = new Person("Amit", 24);
// let p2 = new Person("Adam", 25);


class person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    talk(){
        console.log(`Hi, my name is ${this.name}`);
    }
}

class student extends person{
    constructor(name, age, marks){
        super(name, age);
        this.marks = marks;
    }
}

class teacher extends person{
    constructor(name, age, subject){
        super(name, age);
        this.subject = subject;
    }
}