function sum(...args){
    for(let i=0; i<args.length; i++){
        console.log("You gave us:", args[i])
    }
}
sum(1,2,3,4)


function min(){
    console.log(arguments)
}
min(1,2,3,4)