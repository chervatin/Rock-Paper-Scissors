let computerSelection;
let playerSelectionDirect = "Rock";
let playerSelection = playerSelectionDirect.toLowerCase();
let playerPoints = 0;
let computerPoints = 0;

 function computerPlay(){
    
    let options = [
        "rock",
       "paper",
        "scissor"
      ];
      
      computerSelection = options[Math.floor(Math.random() * (options.length))];
}

computerPlay();
console.log(computerSelection)
console.log(playerSelection)


function playRound(computerSelection,playerSelection){
    switch(true){
    case computerSelection === playerSelection:
        console.log("It is a tie!");
        break
    case (computerSelection === "rock" && playerSelection === "paper"):
        console.log("You Win! Paper beats rock")
        playerPoints = playerPoints + 1;
        break
    case (computerSelection === "rock" && playerSelection === "scissor"):
        console.log("You Lose! :( Rock beats scissor");
        computerPoints = computerPoints + 1;
        break
    case (computerSelection === "paper" && playerSelection === "rock"):
        console.log("You Lose! :( Paper beats Rock");
        computerPoints = computerPoints + 1;
        break
    case (computerSelection === "paper" && playerSelection === "scissor"):
        console.log("You Win! Scissor beats paper");
        playerPoints = playerPoints + 1;
        break
    case (computerSelection === "scissor" && playerSelection === "paper"):
        console.log("You Lose :( Scissor beats paper");
        computerPoints = computerPoints + 1;
        break
    case (computerSelection === "scissor" && playerSelection === "rock"):
        console.log("You Win! Rock beats Scissor");
        playerPoints = playerPoints + 1;
        break
}
}

/*function game(){
    
    for (let i = 0; i < 5; i++) {
        
        

        playRound(computerSelection,playerSelection);
        console.log(playerPoints)
     }
    
}*/

playRound(computerSelection,playerSelection);
