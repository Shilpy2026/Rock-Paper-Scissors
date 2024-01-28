let userScore = 0;
let compScore = 0;



const choices=document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScoreB = document.querySelector("#user-score");
const compScoreB = document.querySelector("#comp-score");

const genCompChoice=() =>
{
    const options = ["scissor","rock","paper"];
    const randIdx = Math.floor(Math.random() *3);
    return options[randIdx];
};

const drawGame = () =>
{
    console.log("Match was draw.");
    msg.innerText = "Game was draw.Play Agaiin";  
    msg.style.backgroundColor = "grey"; 
};

const showWinner =(userWin,userChoice,compChoice) =>
{
    if(userWin)
    {
        userScore++;
        userScoreB.innerText = userScore;
        msg.innerText = `You Win ! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "Green";
    }
    else
    {
        compScore++;
        compScoreB.innerText = compScore;
        console.log("You Lose!");
        msg.innerText = `You Lose !  ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};


//user choice
const playGame = (userChoice) =>
{
    console.log("user Choice =",userChoice);
    //generate computer choice
    const compChoice = genCompChoice();
    console.log("comp Choice =",compChoice);

    if(userChoice === compChoice)
    {
        //Draw game
        drawGame();
    }
    else
    {
        let userWin=true;
        if(userChoice==="paper")
        {
            userWin = compChoice==="scissor"?false:true;
        }
        else if(userChoice==="rock")
        {
            userWin = compChoice==="paper" ? false:true;
        }
        else
        {
            userWin = compChoice==="rock" ? false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
    
    
};

choices.forEach((choice) =>
{
    choice.addEventListener("click" , () =>
    {
          console.log("click");
          const userChoice= choice.getAttribute("id");
          playGame(userChoice);
    
    });
});
