function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber === 1) {
        return 'Rock';
    } else if (randomNumber === 2) {
        return 'Paper';
    } else {
        return 'Scissors';
    }

}

// getComputerChoice();

//console.log(getComputerChoice());

let playerScore = 0;
let computerScore = 0;
let tieScore = 0;

function playRound(playerSelection, getComputerChoice) {
    let message = "Computer picked " + getComputerChoice + "\n";
    let result = '';
    
    console.log(message);
    if (playerSelection == getComputerChoice) {
        result = "draw";
        //return message += "It's a draw."; it wont capture the value
        //of the result variable because there's a return statement
        // Since the return statement will exit the if condition,
        // the content of the result variable will not be able 
        //leave (or be captured)
    }
    else if (playerSelection == 'Rock'){
            if (getComputerChoice == 'Paper'){
                result = "you lose";//paper beats rock
                
            }else {
                result = "you win";//rock beats scissors
                
            }
        }
    else if (playerSelection == 'Paper'){
            if (getComputerChoice == 'Rock'){
                
                result = "you win";//paper beats rock
               
            }else {
                result = "you lose";//scissors beats paper
                
            }
    }else if (playerSelection == 'Scissors'){
            if (getComputerChoice == 'Rock'){
                result = "you lose";//rock beats scissors
                
            }else {
                result = "you win";//scissors beats paper
                
            }

            
    }
    const playerScoreDisplay = document.querySelector('#player-score');
    const computerScoreDisplay = document.querySelector('#computer-score');
    const tieScoreDisplay = document.querySelector('#tie-score');
    

    if (result === 'draw'){
        tieScore++;
        tieScoreDisplay.textContent = tieScore;
        return "It's a draw! " + playerSelection + " and " + getComputerChoice + ".";
    }
    else if (result === 'you win'){
        playerScore++;
        playerScoreDisplay.textContent = playerScore;
        return "You Win! " + playerSelection + " beats " + getComputerChoice +".";
    }else if (result === 'you lose'){
        computerScore++;
        computerScoreDisplay.textContent = computerScore;
        return "You Lose! " + getComputerChoice + " beats " + playerSelection+".";
    }

}


const buttonsDiv = document.querySelector('#buttons');
buttonsDiv.addEventListener('click', (event) => {
  
  let output = document.querySelector('#output');//the output paragraph

  let buttonClicked = event.target;

  switch (buttonClicked.id) {
    case 'rock':
      output.textContent = playRound('Rock', getComputerChoice());
      break;

    case 'paper':
      output.textContent = playRound('Paper', getComputerChoice());
      break;

    case 'scissors':
      output.textContent = playRound('Scissors', getComputerChoice());
      break;
  }


});


