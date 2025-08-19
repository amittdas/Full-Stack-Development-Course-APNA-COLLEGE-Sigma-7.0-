// User enters a max number and tries to guess a random generated number between 1 to max

const max = prompt("Enter the max number");
const random = Math.floor(Math.random() * max) + 1;
console.log(random);

let guess = prompt("Guess the number");

while(true){
    if(guess == "quit"){
        console.log("User quit");
        break;
    }
    if(guess == random){
        console.log("Congrats! You are right.")
        break;
    }else{
        guess = prompt("Your guess was wrong! Please try Again.");
    }
}