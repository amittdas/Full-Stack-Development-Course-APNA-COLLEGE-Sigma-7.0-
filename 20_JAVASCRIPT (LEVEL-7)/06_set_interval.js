console.log("hi There");

let id1 = setInterval((params) => {
    console.log("Apna Collge")
}, 2000);
console.log(id1);


let id2 = setInterval((params) => {
    console.log("hello world")
}, 3000);
console.log(id2);

clearInterval(id1)
clearInterval(id2)