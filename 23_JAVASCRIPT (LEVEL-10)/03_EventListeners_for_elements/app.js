let p = document.querySelector("p");

p.addEventListener("click", function(){
    console.log("This para was clicked.")
})

let box = document.querySelector(".box");

box.addEventListener("mouseenter", function(){
    console.log("Hovered")
})