
function getComputerChoice() {
   let randomNumber = Math.floor(Math.random() * 100);

   let computerChoice = '';

   if (randomNumber >= 0 && randomNumber <= 33) {
    computerChoice = 'rock';
   }
   else if (randomNumber >= 34 && randomNumber <= 66) {
    computerChoice = 'paper';
   }
   else if (randomNumber >= 67 && randomNumber <= 99) {
    computerChoice = 'scissors';
   }
   else {
    computerChoice = 'COMPUTER ERROR!!! RETRY!!!';
   }
   return computerChoice;
}

function playRound(playerChoice, computerChoice) {

    playerChoice = playerChoice.toLowerCase();

    if ((playerChoice === 'rock' && computerChoice === 'paper') || (playerChoice === 'paper' && computerChoice === 'scissors') || (playerChoice === 'scissors' && computerChoice === 'rock')) {
        return `You Lose! ${computerChoice} beats ${playerChoice}`;
    }
    else if (playerChoice === computerChoice) {
        return "We'll call it a draw...for now ";
    }
    else  if ((playerChoice === 'rock' && computerChoice === 'scissors') || (playerChoice === 'paper' && computerChoice === 'rock') || (playerChoice === 'scissors' && computerChoice === 'paper')) {
        return `You Win! ${playerChoice} beats ${computerChoice}`;
    }
}



function game () {
    let playerScore = 0;
    let computerScore = 0;
    for (i=0; i < 5; i++) {
        const computerChoice = getComputerChoice();
        const playerChoice = prompt("rock, paper, scissors", "type choice here");
        playRound(computerChoice, playerChoice);
        if ((playerChoice === 'rock' && computerChoice === 'paper') || (playerChoice === 'paper' && computerChoice === 'scissors') || (playerChoice === 'scissors' && computerChoice === 'rock')) {
            console.log(`You Lose! ${computerChoice} beats ${playerChoice}`);
            computerScore++;
            console.log("Player score is: " + playerScore + " Computer score is: " + computerScore);
        }
        else if ((playerChoice === 'rock' && computerChoice === 'scissors') || (playerChoice === 'paper' && computerChoice === 'rock') || (playerChoice === 'scissors' && computerChoice === 'paper')) {
            console.log(`You Win! ${playerChoice} beats ${computerChoice}`);
            playerScore++;
            console.log("Player score is: " + playerScore + " Computer score is: " + computerScore);
        }
        else if (playerChoice === computerChoice) {
            console.log("This round is a draw");
            console.log("Player score is: " + playerScore + " Computer score is: " + computerScore);
        }

    }
    if (playerScore > computerScore) {
        return "Player Wins";
    }
    else if (computerScore > playerScore) {
        return "Computer Wins";
    }
    else if (playerScore == computerScore) {
        return "It's a tie";
    }
}

console.log(game());