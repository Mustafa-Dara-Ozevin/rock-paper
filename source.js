const ROCK = "rock";
const PAPER = "paper";
const SCISSORRS = "scissors";

const choices = [ROCK, PAPER, SCISSORRS];



function getComputerChoice()
{
    return choices[Math.floor(Math.random()*choices.length)];
};
function getPlayerChoice() {
    return prompt("Rock Paper Scissors?: ").toLowerCase();

}

function play(playerChoice, computerChoice){
    if (playerChoice === ROCK){
        if (computerChoice === SCISSORRS){
            return ("You win! " + ROCK + " beats " + SCISSORRS);
        }else if(computerChoice === PAPER){
            return ("You lose! " + PAPER + " beats " + ROCK);
        }else{
            return "Draw!"
        }
    }else if(playerChoice===PAPER){
        if (computerChoice === ROCK){
            return ("You win! " + PAPER + " beats " + ROCK);
        }else if(computerChoice === SCISSORRS){
            return ("You lose! " + SCISSORRS + " beats " + PAPER);
        }else{
            return "Draw!"
        }
    }else{
        if (computerChoice === PAPER){
            return ("You win! " + SCISSORRS + " beats " + PAPER);
        }else if(computerChoice === ROCK){
            return ("You lose! " + ROCK + " beats " + SCISSORRS);
        }else{
            return "Draw!"
        }
    }
}

console.log(play(getPlayerChoice(),getComputerChoice()));
