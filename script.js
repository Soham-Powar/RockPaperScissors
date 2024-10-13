// variables will keep track of score
let humanScore = 0;
let computerScore = 0;
const btnRock = document.querySelector(".rock");
const btnPaper = document.querySelector(".paper");
const btnScissors = document.querySelector(".scissors");
const div = document.querySelector('.result');

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

// playRound to check who wins

function playRound(computerChoice, humanChoice) {
	humanChoice = humanChoice.toLowerCase();
	div.textContent = `Computer chose: ${computerChoice}. You chose: ${humanChoice}. `;
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
	let textNode = document.createTextNode(`Score - Human: ${humanScore}, Computer: ${computerScore}`);
	div.appendChild(textNode);
}


// Event listeners for button clicks
btnRock.addEventListener('click', function() {
	const computerChoice = getComputerChoice();
	playRound(computerChoice, "rock");
	// div.textContent = `Computer chose: ${computerChoice}. You chose: rock. `;
});

btnPaper.addEventListener('click', function() {
	const computerChoice = getComputerChoice();
	playRound(computerChoice, "paper");
	// div.textContent = `Computer chose: ${computerChoice}. You chose: paper. `;
});

btnScissors.addEventListener('click', function() {
	const computerChoice = getComputerChoice();
	playRound(computerChoice, "scissors");
	// div.textContent = `Computer chose: ${computerChoice}. You chose: scissors. `;
});



