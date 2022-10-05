/* Variable that holds output for winner that will be displayed in .winnerDisplay */
let winnerOutput = '';

/* Variable that will hold value retrieved from button click event */
let userChoice = '';

/* Retrieving user choice */

// Variables to hold DOM buttons
const rBtn = document.querySelector('#rock');
const pBtn = document.querySelector('#paper');
const sBtn = document.querySelector('#scissors');
const btns = document.querySelectorAll('.button');

// Function to output eventListener result to userChoice

const getUserChoice = (e) => {
  userChoice = e.target.textContent.toLowerCase();
}

// Adding event listeners
btns.forEach(btn => {
  btn.addEventListener('click', getUserChoice)
})

/* Var that holds value from computer choice generator */
let computerChoice = () => {
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
    if (computerChoice === 'paper') {
      return 'Computer wins!';
    } else if (computerChoice === 'scissors') {
      return 'Player wins!';
    } else {
      return 'Tie!';
    } 
  } else if (playerChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'Computer wins!';
    } else if (computerChoice === 'rock') {
      return 'Player wins!';
    } else {
      return 'Tie!';
    }
  } else if (playerChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'Computer wins!';
    } else if (computerChoice === 'paper') {
      return 'Player wins!';
    } else {
      return 'Tie!';
    }
  }
}

