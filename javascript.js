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

const playerSelection = 'rock';
const computerChoice = getComputerChoice();
console.log(playRound(playerSelection, computerChoice));

// var words = ['rock',
// 'paper',
// 'scissors'
// ];
// function randomWord(arr) {
//     return arr[Math.floor(Math.random() * arr.length)];
// }

// alert(randomWord(words));