// let a = 5

// console.log(a)
// console.log("Hey! This is node js and currently running by terminal")

// console.log(process.argv)

let args = process.argv;

for(let i=2; i<args.length; i++){
    console.log(args[i]);
}


// How to run js file with node js in terminal
// -->   node <file name>