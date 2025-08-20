// Create a function that creates a multiplication table of given number

function mulTable(num){
    for(let i=1; i<=10; i++){
        console.log(`${i} * ${num} = ${i*num}`);
    }
}

mulTable(5);