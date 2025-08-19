const favMovie = "Avatar"

let guess = prompt("Guess my favourite movie!")

while((guess != favMovie) && (guess != "quit")){
    guess = prompt("Wrong guess, please try again")
}

if(guess == favMovie){
    console.log("Congrats!")
}