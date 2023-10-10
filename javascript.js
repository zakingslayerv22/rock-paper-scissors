function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber === 1) {
        return 'rock';
    } else if (randomNumber === 2) {
        return 'paper';
    } else {
        return 'scissors';
    }

}

getComputerChoice();

// console.log(getComputerChoice());

function playRound(playerSelection, getComputerChoice) {
    if (playerSelection == getComputerChoice) {
        return 'Draw!';}
    else if (playerSelection == 'rock'){
            if (getComputerChoice == 'paper'){
                return "You Lose! Paper beats Rock";
            }else return "You Win! Rock Beats Scissors";
        }
    else if (playerSelection == 'paper'){
            if (getComputerChoice == 'rock'){
                return "You Win! Paper beats Rock";
            }else return "You Lose! Scissors beats Paper";
    }else if (playerSelection == 'scissors'){
            if (getComputerChoice == 'rock'){
                return "You Lose! Rock beats Scissors";
            }else return "You Win! Scissors beats Paper";
    }
    
}


const buttonsDiv = document.querySelector('#buttons');
buttonsDiv.addEventListener('click', (event) => {
  let buttonClicked = event.target;


  switch (buttonClicked.id) {
    case 'rock':
      console.log(playRound('rock', getComputerChoice()));
      break;

    case 'paper':
      console.log(playRound('paper', getComputerChoice()));
      break;

    case 'scissors':
      console.log(playRound('scissors', getComputerChoice()));
      break;
  }


});


