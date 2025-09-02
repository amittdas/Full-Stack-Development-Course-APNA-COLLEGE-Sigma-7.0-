let jsonRes = `{
    "error": false,
    "category": "Programming",
    "type": "twopart",
    "setup": "Why did the programmer jump on the table?",
    "delivery": "Because debug was on his screen.",
    "flags": {
        "nsfw": false,
        "religious": false,
        "political": false,
        "racist": false,
        "sexist": false,
        "explicit": false
    },
    "id": 213,
    "safe": true,
    "lang": "en"
}`;

// JSON to JAVASCRIPT
let validRes = JSON.parse(jsonRes);
console.log(validRes);


let students = {
    name: "Amit",
    marks: 98,
    age: 23,
    grade: "A",
}

// JAVASCRIPT to JSON
let validObj = JSON.stringify(students);
console.log(validObj);