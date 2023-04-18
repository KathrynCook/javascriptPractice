const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput ==='paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else {
    console.log('Error. Please choose rock, paper, or scissors.');
  }
}

const getComputerChoice = () => {
  let compNumber = Math.floor(Math.random() * 3)
  if (compNumber === 0) {
    return 'rock';
  } else if (compNumber === 1) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'Oh no, a tie! No winner this time.';
  } 
  if (userChoice === 'bomb') {
    return 'The user wins!'
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'The computer wins.';
    } else {
      return 'The user wins.';
    }
  } else if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'The computer wins.';
    } else {
      return 'The user wins.';
    }
  } else if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'The computer wins.';
    } else {
      return 'The user wins.';
    }
  }
}

const playGame = () => {
  let userChoice = getUserChoice('paper');
  console.log(userChoice);
  let computerChoice = getComputerChoice();
  console.log(computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame()