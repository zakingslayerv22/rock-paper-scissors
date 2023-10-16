// define buttons 

//i used a switch statement later down because i want to too much
//event listeners will directly impact page performance
//see Event delegation
//https://www.javascripttutorial.net/javascript-dom/javascript-event-delegation/
const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');

let startButton = document.querySelector('#start-and-reset');


//start the game 
const enableGameButtons = () => {
    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorsButton.disabled = false;
    startButton.disabled = true;
}

startButton.addEventListener('click', () => {
enableGameButtons();
})


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
let gameWinner = '';
   
//the score display divs
const playerScoreDisplay = document.querySelector('#player-score');
const computerScoreDisplay = document.querySelector('#computer-score');
const tieScoreDisplay = document.querySelector('#tie-score');


//disable game buttons except start after the resetGame()
const disableGameButtons = () => {
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
    startButton.disabled = false;
};

window.addEventListener('load', (event) => {
    disableGameButtons();
});


//reset the game
const resetGame = (whoWon) => {
    let prompt = "Game Over! \n";
    if (whoWon === "user") {
      prompt += "You won this round with a score of 5!\n";
      playerScoreDisplay.textContent = "5";
    } else {
      prompt += "You lose! Computer won the game with a score of 5.\n";
       computerScoreDisplay.textContent = "5";
    }
    confirm(`${prompt} Do you want to restart?`);
    playerScore = 0;
    computerScore = 0;
    tieScore = 0;
    playerScoreDisplay.textContent = "";
    computerScoreDisplay.textContent = "";
    tieScoreDisplay.textContent = "";
    document.querySelector("#output").textContent = "New Game Started! Yeah you're the man!"
   
    disableGameButtons();

    
  };

  


function playRound(playerSelection, getComputerChoice) {
    let message = "Computer picked " + getComputerChoice + "\n";
    let result = '';
    
    console.log(message);

    if (playerScore === 5){
        console.log(gameWinner = "You Win this round!");
    }else if (computerScore === 5){
        console.log(gameWinner = "You Lose! Computer wins this round!");
    }

    if(playerScore === 5 || computerScore === 5){
        document.querySelector('#rock').disabled = true;
        document.querySelector('#paper').disabled = true;
        document.querySelector('#scissors').disabled = true;
        // document.querySelector('start-and-reset')
    }


    

    //determine the winner of a section
    if (playerSelection == getComputerChoice) {
        result = "draw";
        //return message += "It's a draw."; it wont capture the value
        //of the result variable because there's a return statement
        // Since the return statement will exit the if condition,
        // the content of the result variable will not be able 
        //leave (or be captured)
    }
    else if (playerSelection === 'Rock'){
            if (getComputerChoice == 'Paper'){
                result = "you lose";//paper beats rock
            
            }else {
                result = "you win";//rock beats scissors
                
            }
        }
    else if (playerSelection === 'Paper'){
            if (getComputerChoice === 'Rock'){
                
                result = "you win";//paper beats rock
               
            }else {
                result = "you lose";//scissors beats paper
                
            }
    }else if (playerSelection === 'Scissors'){
            if (getComputerChoice === 'Rock'){
                result = "you lose";//rock beats scissors
                
            }else {
                result = "you win";//scissors beats paper
                
            }    
    }



    //display scores
    if (result === 'draw'){
        tieScore++;
        tieScoreDisplay.textContent = tieScore;
        return "It's a draw! " + playerSelection + " and " + getComputerChoice + ".";
    }
    else if (result === 'you win'){
        playerScore++;
        playerScoreDisplay.textContent = playerScore;
        if(playerScore === 5){
            resetGame("user");
          }
        return "You Win! " + playerSelection + " beats " + getComputerChoice +".";
    }else if (result === 'you lose'){
        computerScore++;
        computerScoreDisplay.textContent = computerScore;
        if(computerScore === 5){
            resetGame("computer");
          }
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


