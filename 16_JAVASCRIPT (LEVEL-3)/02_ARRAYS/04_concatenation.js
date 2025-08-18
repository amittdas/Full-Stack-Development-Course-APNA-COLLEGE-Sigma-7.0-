let primary = ["a", "b", "c"]
let secondary = ["d", "e", "f"]

let newArray = primary.concat(secondary)
console.log(newArray)                            // a, b, c, d, e, f

let newArray2 = secondary.concat(primary)
console.log(newArray2)                           // d, e, f, a, b, c


// REVERSE: reverse an array
console.log(primary.reverse())
console.log(secondary.reverse())