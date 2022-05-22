
let playerPoints = 0;
let computerPoints = 0;

// Creates the <div> position were later the results are shown
const container = document.querySelector('#container');
const result = document.createElement('div');
result.textContent = 'Lets play!';
container.appendChild(result);    


const playerPointsText = document.createElement('div');
playerPointsText.textContent = 'Player Points: ';
container.appendChild(playerPointsText);    

const computerPointsText = document.createElement('div');
computerPointsText.textContent = 'Computer Points: ';
container.appendChild(computerPointsText);    

const winerAnnouncement = document.createElement('div');
winerAnnouncement.textContent = '';
container.appendChild(winerAnnouncement);    

// buttons is a node list. It looks and acts much like an array
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    winerAnnouncement.textContent = ''
    function computerPlay(){
    
        let options = [
            "rock",
           "paper",
            "scissor"
          ];
          computerSelection = options[Math.floor(Math.random() * (options.length))];
    }
    let computerSelection;
    let playerSelection;
    
    computerPlay();
    playerSelection = button.id;

    function playRound(computerSelection,playerSelection){
        switch(true){
        case computerSelection === playerSelection:
            result.textContent = 'It is a tie!';
            break
        case (computerSelection === "rock" && playerSelection === "paper"):
            result.textContent = 'You Win! Paper beats rock';
            playerPoints = playerPoints + 1;
            break
        case (computerSelection === "rock" && playerSelection === "scissor"):
            result.textContent = 'You Lose! :( Rock beats scissor';
            computerPoints = computerPoints + 1;
            break
        case (computerSelection === "paper" && playerSelection === "rock"):
            result.textContent = 'You Lose! :( Paper beats Rock';
            computerPoints = computerPoints + 1;
            break
        case (computerSelection === "paper" && playerSelection === "scissor"):
            result.textContent = 'You Win! Scissor beats paper';
            playerPoints = playerPoints + 1;
            break
        case (computerSelection === "scissor" && playerSelection === "paper"):
            result.textContent = 'You Lose :( Scissor beats paper';
            computerPoints = computerPoints + 1;
            break
        case (computerSelection === "scissor" && playerSelection === "rock"):
            result.textContent = 'You Win! Rock beats Scissor';
            playerPoints = playerPoints + 1;
            break
    }
    playerPointsText.textContent = `Player Points: ${playerPoints}`;
    computerPointsText.textContent = `Computer Points: ${computerPoints}`;
    
    if (playerPoints == 5){
        winerAnnouncement.textContent = 'Congratulations! You WIN the game!';
        playerPoints = 0;
        computerPoints = 0;
    } else if (computerPoints == 5){
            winerAnnouncement.textContent = 'I am Sorry :( You LOSE the game!';
            playerPoints = 0;
            computerPoints = 0;  
        }
    }
    playRound(computerSelection,playerSelection) 
  });
});
