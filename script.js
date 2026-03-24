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
    let choice = +prompt("Enter a number : 0 or 1 or 2");
    
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