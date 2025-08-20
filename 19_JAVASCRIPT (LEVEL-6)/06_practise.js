// Create a function that returns the concatenation of all strings in an array.

let str = ['I ', 'am ', 'a ', 'final ', 'year ', 'student.'];

function concatString(str){
    let result = "";
    for(let i=0; i<str.length; i++){
        result += str[i];
    }
    return result;
}

console.log(str);
let res = concatString(str);
console.log(res);