// The promise object represents the eventual completion or failure for an asynchronous operation and its resulting value.

// function savtoDb(data, success, failure) {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if (internetSpeed > 4) {
//         success();
//     } else {
//         failure();
//     }
// }

// callback hell
// savtoDb("Apna College", () => {
//     console.log("Your data was saved.");
//     savetoDb("hello World", () => {
//         console.log("Success2: Data2 saved");
//         savetoDb("Amit Das", () => {
//             console.log("Success3: Data3 saved.");
//         }, () => {
//             console.log("Failure3: weak connection.");
//         })
//     }, () => {
//         console.log("Failure2: Weak connection.");
//     })
// }, () => {
//     console.log("Weak connection! Data not saved.");
// });

// promises
function savtoDb(data) {
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if (internetSpeed > 4) {
            resolve("Success: Data was saved");
        } else {
            reject("Failure: weak connection");
        }
    })
}

savetoDb("Apna college")
    .then(() => {
        console.log("Promise was resloved");
        return savtoDb("Hello world")
    })
    .then(() => {
            console.log("data2 saved.")
        })
    .catch(() => {
        console.log("Promise was rejected.");
    });