let multipleGreet = function(func, count){
    for(let i=1; i<=count; i++){
        func();
    }
}

let greet = function(){
    console.log("hello");
}

multipleGreet(greet, 5);
