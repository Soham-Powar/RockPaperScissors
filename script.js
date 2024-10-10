// variables will keep track of score
let humanScore = 0;
let computerScore = 0;

// A function will return the choice of computer randomly
// getComputerChoice

function getComputerChoice() {
	const choice = Math.floor(Math.random() * 3); // Generates 0, 1, or 2
	let computerChoice;
	if (choice === 0) {
		computerChoice = "rock";
	} else if (choice === 1) {
		computerChoice = "paper";
	} else {
		computerChoice = "scissors";
	}
	return computerChoice;
}

// A function to get the choice of human
//getHumanChoice

function getHumanChoice() {
	let humanChoice = prompt("What do you choose?");
	return humanChoice;
}

// playRound to check who wins

function playRound(computerChoice, humanChoice) {
	humanChoice = humanChoice.toLowerCase();
	if(computerChoice === "rock") {
		if(humanChoice === "rock") {
			console.log("Its an tie");
		}
		else if(humanChoice === "paper") {
			console.log("You win this round. Paper beats Rock");
			humanScore++;
		}
		else {
			console.log("You lose. Rock beats scissors");
			computerScore++;
		}
	}
	else if(computerChoice === "paper") {
		if(humanChoice === "rock") {
			console.log("you lose");
			computerScore++;
		}
		else if(humanChoice === "paper") {
			console.log("tie");
		}
		else {
			console.log("You win");
			humanScore++;
		}
	}
	else if(computerChoice === "scissors") {
		if(humanChoice === "rock") {
			console.log("you win");
			humanScore++;
		}
		else if(humanChoice === "paper") {
			console.log("you lose");
			computerScore++;
		}
		else {
			console.log("tie");
		}
	}
}

//Play 5 rounds

function playGame() {
	const computerChoice = getComputerChoice();
	const humanChoice = getHumanChoice();
	playRound(computerChoice, humanChoice); 
}

for(i = 0; i < 5; i++) {
	playGame();
	console.log("Your score is: " + humanScore);
	console.log("The CPU's score is: " + computerScore);
}

if(humanScore > computerScore) {
	console.log("You won the game!");
}
else if(computerScore > humanScore) {
	console.log("You lost! Better luck next time.");
}
else {
	console.log("Woahh! Its an tie.")
}

 