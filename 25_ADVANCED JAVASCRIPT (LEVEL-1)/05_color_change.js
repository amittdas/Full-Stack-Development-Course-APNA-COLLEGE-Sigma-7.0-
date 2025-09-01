let h1 = document.querySelector("h1")

function changeColor(color, delay) {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            h1.style.color = color;
            resolve("Color changed")
        }, delay);
    })
};

changeColor("red", 1000)
.then(()=>{
    return changeColor("Orange", 1000)
})
.then(()=>{
    return changeColor("green", 1000)
})
.then(()=>{
    return changeColor("purple", 1000)
})
.then(()=>{
    return changeColor("blue", 1000)
})

// changeColor("red", 1000, () => {
//     changeColor("orange", 1000, () => {
//         changeColor("green", 1000, () => {
//             changeColor("purple", 1000);
//         });
//     });
// });