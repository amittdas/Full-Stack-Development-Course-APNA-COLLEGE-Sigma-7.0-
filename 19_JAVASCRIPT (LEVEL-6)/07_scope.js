// Function scope
function calSum(a, b){
    let sum = (a+b);     //function scope: not accessable outside the function
}

// Block Scope
{
    let a = 25;          //Block scope: not accessable outside the function
}

// Lexical scope
function outerFun(){
    let x = 5;
    let y = 6;
    function innerFun(){
        console.log(x);
    }

    innerFun();               // x is accessable throughout the whole outerFun
}