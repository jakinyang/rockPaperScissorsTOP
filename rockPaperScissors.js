let winnerOutput = '';

let userChoice = '';

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