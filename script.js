function computerChoice(){

    let random=Math.floor(Math.random()*3);
    if(random===0){
        return "rock";
    }
    else if(random===1){
        return "paper";
    }
    else{
        return "scissor";
    }
}
function removeLastResult(){
    resultDiv.removeChild(resultPara);
}
function playerChoice(event){
    removeLastResult();
    let choice=event.target.textContent.toLowerCase();
    playGame(choice);
}
let player_wins=0;
let computer_wins=0;
//event delegation
let choiceDiv=document.querySelector(".player-choice");
document.addEventListener("click", (event)=>{playerChoice(event)});
//for displaying result after each round
let resultDiv=document.createElement("div");
let resultPara=document.createElement("div");
resultDiv.appendChild(resultPara);
document.querySelector("body").appendChild(resultDiv);
//for displaying the score
let scoreDiv=document.createElement("div");
let scorePlayer=document.createElement("p");
let scoreComputer=document.createElement("p");
scoreDiv.appendChild(scorePlayer);
scoreDiv.appendChild(scoreComputer);
document.querySelector("body").appendChild(scoreDiv);
function playGame(player){
    let comp=computerChoice();
    console.log(comp);
    let outcome="";
    if((player==="rock" && comp==="scissor")||(player==="scissor" && comp==="paper")||(player==="paper" && comp==="rock")){
            outcome="You won!"
            player_wins++;
            console.log("he won");
    }
    else if((comp==="rock" && player==="scissor")||(comp==="scissor" && player==="paper")||(comp==="paper" && player==="rock")){
            outcome="you lost";
            computer_wins++;
            console.log("he lost");
    }
    else{
            outcome="draw";
            console.log("draw");
    }
    resultPara.textContent=outcome;
    resultDiv.appendChild(resultPara);
    scorePlayer.textContent="Your wins: "+player_wins;
    scoreComputer.textContent="Opponent wins: "+computer_wins;
}

    
