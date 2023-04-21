const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

const choices = [ROCK, PAPER, SCISSORS];



function getComputerChoice()
{
    return choices[Math.floor(Math.random()*choices.length)];
}
function getPlayerChoice() {
    return prompt("Rock Paper Scissors?: ").toLowerCase();

}

function playRound(playerChoice, computerChoice){
    if (playerChoice === ROCK){
        if (computerChoice === SCISSORS){
            return ("You win! " + ROCK + " beats " + SCISSORS);
        }else if(computerChoice === PAPER){
            return ("You lose! " + PAPER + " beats " + ROCK);
        }else{
            return "Draw!"
        }
    }else if(playerChoice===PAPER){
        if (computerChoice === ROCK){
            return ("You win! " + PAPER + " beats " + ROCK);
        }else if(computerChoice === SCISSORS){
            return ("You lose! " + SCISSORS + " beats " + PAPER);
        }else{
            return "Draw!"
        }
    }else{
        if (computerChoice === PAPER){
            return ("You win! " + SCISSORS + " beats " + PAPER);
        }else if(computerChoice === ROCK){
            return ("You lose! " + ROCK + " beats " + SCISSORS);
        }else{
            return "Draw!"
        }
    }

}

function game(){
    let playerPoint = 0;
    let computerPoint = 0;
    for(let i=0;i<5;i++){
        let result = playRound(getPlayerChoice(),getComputerChoice());
        console.log(result)
        if(result.includes("win")){
            playerPoint++;
        }else if (result.includes("lose")){
            computerPoint++;
        }
    }
    console.log("Your Score: " + playerPoint)
    console.log("Computer Score: " + computerPoint)

}

game()