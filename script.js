function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3); // output : 0 or 1 or 2

    if (randomNumber === 0) {
        return "Rock";
    }
    else if (randomNumber === 1) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
}

function createButtons() {
    const rockBtn = document.createElement("button");
    const paperBtn = document.createElement("button");
    const scissorBtn = document.createElement("button");

    rockBtn.style.background = "gray";
    rockBtn.style.color = "white";
    rockBtn.textContent = "Rock";
    rockBtn.style.height = "30px";
    rockBtn.style.width = "60px";

    paperBtn.style.background = "red";
    paperBtn.style.color = "black";
    paperBtn.textContent = "Paper";
    paperBtn.style.height = "30px";
    paperBtn.style.width = "60px";

    scissorBtn.style.background = "gold";
    scissorBtn.style.color = "black";
    scissorBtn.textContent = "Scissor";
    paperBtn.style.height = "30px";
    paperBtn.style.width = "60px";

    const div = document.createElement("div");
    div.appendChild(rockBtn);
    div.appendChild(paperBtn);
    div.appendChild(scissorBtn);
    div.style.display = "flex";
    div.style.justifyContent = "space-around";
    div.style.marginTop = "30px";

    const body = document.querySelector("body");
    body.appendChild(div);

    return { rockBtn, paperBtn, scissorBtn };
}

function listener() {

    let buttonGroup = createButtons();

    buttonGroup.rockBtn.addEventListener("click", () => {
        playRound("Rock", getComputerChoice());
    });

    buttonGroup.paperBtn.addEventListener("click", () => {
        playRound("Paper", getComputerChoice());
    });

    buttonGroup.scissorBtn.addEventListener("click", () => {
        playRound("Scissors", getComputerChoice());
    });
}

function createDisplay(){
    const div1 = document.createElement("div");
    div1.style.display = "flex"
    div1.style.flexDirection = "column";
    div1.style.justifyContent = "center";
    div1.style.alignItems = "center";
    div1.style.height = "auto";
    div1.style.width = "auto";
    div1.style.background = "red";
    div1.style.margin = "auto";
    div1.style.marginTop = "100px";
    div1.classList.add("display");
    const body1 = document.querySelector("body");
    body1.appendChild(div1);
    return div1;
}

let computerScore = 0;
let humanScore = 0;
listener();
let display = createDisplay();

function playRound(humanChoice, computerChoice) {
    
    let result = null;

    if (humanChoice === "Rock") {
        if (computerChoice === "Paper") {
            computerScore += 1
            result = "compWin";
        }
        else if (computerChoice === "Scissors") {
            humanScore += 1
            result = "userWin";
        }
        else {
            result = "Tie";
        }
    }
    else if (humanChoice === "Paper") {
        if (computerChoice === "Rock") {
            humanScore += 1
            result = "userWin";
        }
        else if (computerChoice === "Scissors") {
            computerScore += 1
            result = "compWin";
        }
        else {
            result = "Tie";
        }
    }
    else { // humanChoice === "Scissors"
        if (computerChoice === "Paper") {
            humanScore += 1
            result = "userWin";
        }
        else if (computerChoice === "Rock") {
            computerScore += 1
            result = "compWin";
        }
        else {
            result = "Tie";
        }
    }

    let gameResult = document.querySelector(".display");
    gameResult.innerHTML = "";
    const p1 = document.createElement("p");

    let gameFinish = false;

    if(result === "userWin"){
        if(humanScore >= 5){
            gameFinish = true;
            p1.textContent = "You won the game";
        }
        else{
        p1.textContent = `You won, score :  ${humanScore}`;
        }
        gameResult.appendChild(p1);
    } 
    else if(result === "compWin"){
        if(computerScore >= 5){
            gameFinish = true;
            p1.textContent = "Computer won the game";
        }
        else{
        p1.textContent = `Computer won, score :  ${computerScore}`;
        }
        gameResult.appendChild(p1);
    }  
    else{ // result == "Tie"
        p1.textContent = `Tie`;
        gameResult.appendChild(p1);
    }

    if(gameFinish === true){
        const resetBtn = document.createElement("button");
        resetBtn.textContent = "Reset Game";
        resetBtn.style.width = "100px";
        resetBtn.style.height = "30px";
        resetBtn.style.marginBottom = "16px"
        resetBtn.addEventListener("click", () =>{
            location.reload();
            }
        );
        gameResult.appendChild(resetBtn);

        let buttons = document.querySelectorAll("button")
        buttons.forEach(btn => {
            if(btn.textContent !== "Reset Game"){
                btn.disabled = true;
            }
        });
    }
}

