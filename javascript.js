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

// const playerSelection = 'rock';
// const computerChoice = getComputerChoice();
// console.log(playRound(playerSelection, computerChoice));

function game() {

    const playerSelection1 = prompt('Rock, Paper, Scissors?');
    const computerSelection1 = getComputerChoice();
    console.log(playRound(playerSelection1, computerSelection1));

    const playerSelection2 = prompt('Rock, Paper, Scissors?');
    const computerSelection2 = getComputerChoice();
    console.log(playRound(playerSelection2, computerSelection2));

    const playerSelection3 = prompt('Rock, Paper, Scissors?');
    const computerSelection3 = getComputerChoice();
    console.log(playRound(playerSelection3, computerSelection3));

    const playerSelection4 = prompt('Rock, Paper, Scissors?');
    const computerSelection4 = getComputerChoice();
    console.log(playRound(playerSelection4, computerSelection4));

    const playerSelection5 = prompt('Rock, Paper, Scissors?');
    const computerSelection5 = getComputerChoice();
    console.log(playRound(playerSelection5, computerSelection5));

}

game();

// var words = ['rock',
// 'paper',
// 'scissors'
// ];
// function randomWord(arr) {
//     return arr[Math.floor(Math.random() * arr.length)];
// }

// alert(randomWord(words));