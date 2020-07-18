var selection = ["rock", "paper", "scissor"];


function computerPlay(){
    var number = Math.floor(Math.random() * 3);
    return selection[number];
}

// function playerSelection(choice){
//     var playerSelection = choice;
//     return playerSelection;
// }

function playRound(playerSelection, computerSelection){
   
    if(playerSelection == "rock"){
        if(computerSelection == "rock"){
            return ("tie");
        }
        else if(computerSelection == "paper"){
            return ("Computer wins");
        }
        else {
            return ("Player wins");
        }

    }
    else if(playerSelection == "paper"){
        if(computerSelection == "paper"){
            return ("tie");
        }
        else if(computerSelection == "scissor"){
            return ("Computer wins");
        }
        else {
            return ("Player wins");
        }
    }
    // playerSelection  = scissor
    else {
        if(computerSelection == "scissor"){
            return ("tie");
        }
        else if(computerSelection == "rock"){
            return ("Computer wins");
        }
        else {
            return ("Player wins");
        }

    }
}

function game(){
    let playerCounter = 0;
    let computerCounter = 0;
    for(let i = 0; i<5; i++){
        const playerSelection = prompt("what is your selection?");
        const computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection);
        if(result === "Player wins"){
            playerCounter++;
        }
        else if(result === "Computer wins"){
            computerCounter++;
        }

    }
    if(playerCounter == computerCounter){
        console.log("tie");
        return ("tie");
    }
    else if( playerCounter > computerCounter){
        console.log("Player wins");
        return ("Player wins");
    }
    else {
        console.log("Computer wins");
        return ("Computer wins");
    }
}
game();