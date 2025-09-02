async function greet() {
    throw "404 page not found";
    return "hello";
}

greet()
    .then((result) => {
        console.log("Promise was resolved.");
        console.log("Result was: ", result);
    })
    .catch((err) => {
        console.log("promise was rejected with err : ", err);
    })
