function getComputerChoice(){
    let randomNumber = Math.floor(Math.random()*3); // output : 0 or 1 or 2
    
    if(randomNumber === 0) {
        return "Rock";
    }
    else if(randomNumber === 1) {
        return "Papper";
    }
    else {
        return "Scissors";
    }
}

function getHumanChoice(){
    let choice = +prompt("Enter a number : 0 for 'Rock', 1 for 'Papper', 2 for 'Scissors'");
    
    if(choice === 0){
        return "Rock";
    }
    else if(choice === 1){
        return "Papper";
    }
    else{
        return "Scissors";
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    if(humanChoice === "Rock"){
        if(computerChoice === "Paper"){
            computerScore += 1
            console.log("Computer won!")
        }
        else if(computerChoice === "Scissors"){
            humanScore += 1
            console.log("You won!!!")
        }
        else{
            console.log("Tie")
        }
    }
    else if(humanChoice === "Paper"){
        if(computerChoice === "Rock"){
            humanScore += 1
            console.log("You won!!!")
        }
        else if(computerChoice === "Scissors"){
            computerScore += 1
            console.log("Computer won!")
        }
        else{
            console.log("Tie")
        }
    }
    else{ // humanChoice === "Scissors"
        if(computerChoice === "Paper"){
            humanScore += 1
            console.log("You won!!!")
        }
        else if(computerChoice === "Rock"){
            computerScore += 1
            console.log("Computer won!")
        }
        else{
            console.log("Tie")
        }
    }
}

// Function to play 5 rounds of game and display score at the end with winner anouncement.
function playGame(){
    for(let i=1; i<=5;i++){
        playRound(getHumanChoice(), getComputerChoice());
    }

    console.log("Your Score : "+ humanScore);
    console.log("Computer's Score : "+ computerScore);

    if(computerScore < humanScore){
        console.log("You won the game.")
    }
    else if(computerScore > humanScore){
        console.log("Computer won the game.")
    }
    else{
        console.log("The game was a tie.")
    }

    humanScore = 0;
    computerScore = 0;
    console.log("Score reset to 0, do you want to play another game ?");
}