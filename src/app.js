//zmienne
let userScore = 0;
let computerScore = 0;

//DOM zmienne
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

//function computer choice, create an array, asign random 1,2,3 to our r,p,s id
let getComputerChoice = () => {
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
};

//Convers function to change r bets s to rock scissors
let convertToWord = (letter) => {
  if (letter === "r") return "ROCK";
  if (letter === "p") return "PAPER";
  return "SCISSORS";
};

//functions we want ot run after computer and user make move
let win = (userChoice, ComputerChoice) => {
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} 
  beats ${convertToWord(ComputerChoice)}${smallCompWord} YOU WIN!🔥`;
  userChoice_div.classList.add("green-glow");
  setTimeout(() => userChoice_div.classList.remove("green-glow"), 400);
};

let lose = (userChoice, ComputerChoice) => {
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} 
  loses to ${convertToWord(ComputerChoice)}${smallCompWord} YOU LOST...💩`;
  userChoice_div.classList.add("red-glow");
  setTimeout(() => userChoice_div.classList.remove("red-glow"), 400);
};

let draw = (userChoice, ComputerChoice) => {
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} 
  equals ${convertToWord(ComputerChoice)}${smallCompWord} it's a draw 🥱`;
  userChoice_div.classList.add("gray-glow");
  setTimeout(() => userChoice_div.classList.remove("gray-glow"), 400);
};

//defined function game
let game = (userChoice) => {
  const ComputerChoice = getComputerChoice();
  switch (userChoice + ComputerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, ComputerChoice);
      break;
    case "sr":
    case "rp":
    case "ps":
      lose(userChoice, ComputerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, ComputerChoice);
      break;
  }
};

//add eventlisner and defined function main
let main = () => {
  rock_div.addEventListener("click", () => game("r"));
  paper_div.addEventListener("click", () => game("p"));
  scissors_div.addEventListener("click", () => game("s"));
};
main();
