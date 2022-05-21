
// Creates the <div> position were later the results are shown
var container = document.querySelector('#container');
var content = document.createElement('div');
content.textContent = 'Lets play!';
container.appendChild(content);    

// buttons is a node list. It looks and acts much like an array
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    
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
    let playerPoints = 0;
    let computerPoints = 0;
    
    computerPlay();
    playerSelection = button.id;

    function playRound(computerSelection,playerSelection){
        switch(true){
        case computerSelection === playerSelection:
            content.textContent = 'It is a tie!';
            break
        case (computerSelection === "rock" && playerSelection === "paper"):
            content.textContent = 'You Win! Paper beats rock';
            playerPoints = playerPoints + 1;
            break
        case (computerSelection === "rock" && playerSelection === "scissor"):
            content.textContent = 'You Lose! :( Rock beats scissor';
            computerPoints = computerPoints + 1;
            break
        case (computerSelection === "paper" && playerSelection === "rock"):
            content.textContent = 'You Lose! :( Paper beats Rock';
            computerPoints = computerPoints + 1;
            break
        case (computerSelection === "paper" && playerSelection === "scissor"):
            content.textContent = 'You Win! Scissor beats paper';
            playerPoints = playerPoints + 1;
            break
        case (computerSelection === "scissor" && playerSelection === "paper"):
            content.textContent = 'You Lose :( Scissor beats paper';
            computerPoints = computerPoints + 1;
            break
        case (computerSelection === "scissor" && playerSelection === "rock"):
            content.textContent = 'You Win! Rock beats Scissor';
            playerPoints = playerPoints + 1;
            break
    }
    
    }
    playRound(computerSelection,playerSelection) 
  });
});








//function game(){
    //for (let i = 0; i < 5; i++)//
        //computerPlay();
        //let playerSelectionDirect = prompt('Choose between Rock, Paper or Scissor');
       // let playerSelection = playerSelectionDirect.toLowerCase();
        //playRound(computerSelection,playerSelection);
        //console.log(playerPoints)
     //}
    

//game();
