// variables will keep track of score
let humanScore = 0;
let computerScore = 0;

// A function will return the choice of computer randomly
// getComputerChoice

function getComputerChoice() {
	const choice = Math.floor(Math.random() * 10) + 1;
	let computerChoice;
	if(choice >= 1 && choice <= 3) {
		computerChoice = "Rock";
	}
	else if(choice > 3 && choice <= 6) {
		computerChoice = "Paper";
	}
	else if(choice > 6 && choice <= 9) {
		computerChoice = "Scissors";
	}
	return computerChoice;
}

// A function to get the choice of human
//getHumanChoice

function getHumanChoice() {
	let humanChoice = prompt("What do you choose?");
	return humanChoice;
}

let computerChoice = getComputerChoice();
console.log(computerChoice);
let humanChoice = getHumanChoice();
console.log(humanChoice);

// playRound to check who wins