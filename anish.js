let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msz=document.querySelector("#msz");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const gencompChoice=()=>{
    const options=["Rock","Paper","Scissors"];
    const randInx=Math.floor(Math.random()*3);
    return options[randInx];
};

const drawGame=()=>{
    msz.innerText="Game was Draw,Play Again";
    msz.style.backgroundColor="rgb(248, 225, 229)";
};

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msz.innerText=`You Win! Your ${userChoice} beats ${compChoice}`;
        msz.style.backgroundColor="green";
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        msz.innerText=`You Lose. ${compChoice} beats your ${userChoice}`;
        msz.style.backgroundColor="red";
    }
}

const playGame=(userChoice)=>{
    //Generate computer choice
    const compChoice=gencompChoice();

    if(userChoice===compChoice){
        //Draw Game 
        drawGame();
    }else{
        let userWin=true;
        if(userChoice==="Rock"){
            //Scissors,paper
            userWin=compChoice==="Paper"?false:true;
        } else if(userChoice==="Paper"){
            //rock,scissors
            userWin=compChoice==="Scissors"? false:true;
        }else{
            //rock,paper
            userWin=compChoice==="Rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice,);
    });
});