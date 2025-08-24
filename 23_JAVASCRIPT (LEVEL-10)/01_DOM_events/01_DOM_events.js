// let btn = document.querySelector("button");
// console.dir(btn);

let btns = document.querySelectorAll("button")
// for(btn of btns){
//     btn.onclick = sayHello;
//     btn.onclick = sayName;
//     btn.onmouseenter = function(){
//         console.log("You entered in a button")
//     }
// }

for(btn of btns){
    // btn.addEventListener("click", sayHello);
    // btn.addEventListener("click", sayName);
    btn.addEventListener("dblclick", function(){
        console.log("Button was double clicked.")
    });
}

function sayHello(){
    alert("Hello !");
}
function sayName(){
    alert("Apna College !");
}

// btn.onclick = sayHello;