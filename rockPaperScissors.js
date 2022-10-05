/* Variable that holds output for winner that will be displayed in .winnerDisplay */
let winnerOutput = '';

/* Variable that will hold value retrieved from button click event */
let userChoice = '';
let computerChoice = '';

/* Retrieving user choice from button DOM event */

// Variables to hold DOM buttons
const btns = document.querySelectorAll('.button');

// Function to output eventListener result to userChoice

const runGame = (e) => {
  userChoice = e.target.textContent.toLowerCase();
  computerChoice = getComputerChoice();
  game(computerChoice, userChoice);
  document.querySelector('#winnerTitle').textContent = winnerOutput;
  console.log(userChoice);
  console.log(computerChoice);
}

// Adding event listeners
btns.forEach(btn => {
  btn.addEventListener('click', runGame)
})

/* Var that holds value from computer choice generator */
let getComputerChoice = () => {
  let randomIndex = Math.ceil(Math.random() * 3);
  switch (randomIndex) {
    case 1:
      return 'rock';
      break;
    case 2:
      return 'paper'
      break;
    case 3:
      return 'scissors'
      break;  
    default:
      return 'OMG WTF IS HAPPENING'
      break;
  }
}

/* Game: takes in two choices and outputs the winner */
const game = (compChoice, playerChoice) => {
  if (playerChoice === 'rock') {
    if (compChoice === 'paper') {
      winnerOutput = 'Computer wins!';
      return 'Computer wins!';
    } else if (compChoice === 'scissors') {
      winnerOutput = 'Player wins!';
      return 'Player wins!';
    } else {
      winnerOutput = 'Tie!';
      return 'Tie!';
    } 
  } else if (playerChoice === 'paper') {
    if (compChoice === 'scissors') {
      winnerOutput = 'Computer wins!';
      return 'Computer wins!';
    } else if (compChoice === 'rock') {
      winnerOutput = 'Player wins!';
      return 'Player wins!';
    } else {
      winnerOutput = 'Tie!';
      return 'Tie!';
    }
  } else if (playerChoice === 'scissors') {
    if (compChoice === 'rock') {
      winnerOutput = 'Computer wins!';
      return 'Computer wins!';
    } else if (compChoice === 'paper') {
      winnerOutput = 'Player wins!';
      return 'Player wins!';
    } else {
      winnerOutput = 'Tie!';
      return 'Tie!';
    }
  }
  console.log(winnerOutput);
  document.querySelector('#winnerTitle').textContent = winnerOutput;
}

/* Playgame function */

/* const playGame = (computerChoice, userChoice) => {
  game(computerChoice, userChoice);
  console.log(computerChoice());
  console.log(userChoice)
} */

/* Event listener to initiate playGame */

/* const submitBtn = document.querySelector('.submitBtn');

submitBtn.addEventListener('click', game(computerChoice, userChoice)); */