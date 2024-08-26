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
function playerChoice(){
    let choice=window.prompt("Enter your choice","default");
    choice=choice.toLowerCase();
    //if it's none of the expected values, ask user to enter it again
    console.log(choice);
    if(choice!="rock" && choice!="paper" && choice!="scissor"){
        choice=playerChoice();
    }
    return choice;
}
let total_wins=0;
function playGame(){
    let player_wins=0;
    let computer_wins=0;
    for(let i=0; i<5; i++){
        let comp=computerChoice();
        let player=playerChoice();
        if((player==="rock" && comp==="scissor")||(player==="scissor" && comp==="paper")||(player==="paper" && comp==="rock")){
            console.log("You won the round");
            player_wins++;
        }
        else if((comp==="rock" && player==="scissor")||(comp==="scissor" && player==="paper")||(comp==="paper" && player==="rock")){
            console.log("You lost the round");
            computer_wins++;
        }
        else{
            console.log("Draw");
        }
    }
    if(player_wins>computer_wins){
        console.log("You won the match");
        total_wins++;
        console.log("You have won "+total_wins+" rounds");
    }
}
