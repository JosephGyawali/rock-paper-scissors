let userScore = 0;
let computerScore = 0;

const compScore_span = document.getElementById("computer-score");
const userScore_span = document.getElementById("user-score");
const result_p = document.querySelector(".results > p");

const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

function getComputerChoice(){
    var selection = ["r", "p", "s"];
    var number = Math.floor(Math.random() * 3);
    return selection[number];
}

function convertToWord(letter){
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

function win(userChoice, computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sup();
    const compUserWord = "comp".fontsize(3).sup();
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${compUserWord}. You win!`;
}

function lose(userChoice, computerChoice){
    computerScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sup();
    const compUserWord = "comp".fontsize(3).sup();
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${compUserWord}. You lost!`;
}

function draw(userChoice, computerChoice){
    const smallUserWord = "user".fontsize(3).sup();
    const compUserWord = "comp".fontsize(3).sup();
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(computerChoice)}${compUserWord}. It's a draw!`;
}

function game(userChoice){
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}

main();

function main(){
rock_div.addEventListener('click', function(){
    game("r");
});

paper_div.addEventListener("click", function(){
    game("p");
});

scissor_div.addEventListener('click', function(){
    game("s");
});
}



// var selection = ["rock", "paper", "scissor"];


// function computerPlay(){
//     var number = Math.floor(Math.random() * 3);
//     return selection[number];
// }

// // function playerSelection(choice){
// //     var playerSelection = choice;
// //     return playerSelection;
// // }

// function playRound(playerSelection, computerSelection){
   
//     if(playerSelection == "rock"){
//         if(computerSelection == "rock"){
//             return ("tie");
//         }
//         else if(computerSelection == "paper"){
//             return ("Computer wins");
//         }
//         else {
//             return ("Player wins");
//         }

//     }
//     else if(playerSelection == "paper"){
//         if(computerSelection == "paper"){
//             return ("tie");
//         }
//         else if(computerSelection == "scissor"){
//             return ("Computer wins");
//         }
//         else {
//             return ("Player wins");
//         }
//     }
//     // playerSelection  = scissor
//     else {
//         if(computerSelection == "scissor"){
//             return ("tie");
//         }
//         else if(computerSelection == "rock"){
//             return ("Computer wins");
//         }
//         else {
//             return ("Player wins");
//         }

//     }
// }

// function game(){
//     let playerCounter = 0;
//     let computerCounter = 0;
//     for(let i = 0; i<5; i++){
//         const playerSelection = prompt("what is your selection?");
//         const computerSelection = computerPlay();
//         let result = playRound(playerSelection, computerSelection);
//         if(result === "Player wins"){
//             playerCounter++;
//         }
//         else if(result === "Computer wins"){
//             computerCounter++;
//         }

//     }
//     if(playerCounter == computerCounter){
//         console.log("tie");
//         return ("tie");
//     }
//     else if( playerCounter > computerCounter){
//         console.log("Player wins");
//         return ("Player wins");
//     }
//     else {
//         console.log("Computer wins");
//         return ("Computer wins");
//     }
// }
// game();