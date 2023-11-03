const playBtn = document.querySelector("#play");
const divText = document.querySelector(".text-container p");

const choiceBtnList = document.querySelectorAll(".choice-btn");
const rockBtn = choiceBtnList[0];
const paperBtn = choiceBtnList[1];
const scissorsBtn = choiceBtnList[2];

const pointText = document.querySelector(".points");
const roundText = document.querySelector(".round");

let points, thisRound;

document.addEventListener("click", (e) => {
  switch (e.target) {
    case playBtn:
      playBtn.style.display = "none";
      divText.textContent = "Make your choice:";
      for (btn of choiceBtnList) {
        btn.style.display = "flex";
      }

      pointText.textContent = "Player: 0 | Computer: 0";
      roundText.textContent = "";

      points = [0, 0];
      break;
    case rockBtn:
      thisRound = playRound("rock", getComputerChoice());
      points = game(points, thisRound);
      break;
    case paperBtn:
      thisRound = playRound("paper", getComputerChoice());
      points = game(points, thisRound);
      break;
    case scissorsBtn:
      thisRound = playRound("scissors", getComputerChoice());
      points = game(points, thisRound);
      break;
  }
});

function game(points, thisRound) {
  // Point counter
  if (thisRound === "player") {
    points[0] += 1;
  } else if (thisRound === "computer") {
    points[1] += 1;
  }

  pointText.textContent = `Player: ${points[0]} | Computer: ${points[1]}`;

  // Endgame
  let endgame = false;
  if (points[0] == 5) {
    divText.textContent = "Victory! Good job!";
    endgame = true;
  } else if (points[1] == 5) {
    divText.textContent = "Defeat! Better luck next time!";
    endgame = true;
  }

  if (endgame) {
    for (btn of choiceBtnList) btn.style.display = "none";
    playBtn.textContent = "Play again";
    playBtn.style.display = "flex";
  }
  return points;
}

function getComputerChoice() {
  const computerSelection = ["rock", "paper", "scissors"];
  let selector = Math.floor(Math.random() * 3);
  return computerSelection[selector];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    tieRoundMsg(playerSelection, computerSelection);
    return "tie";
  }
  if (playerSelection === "rock") {
    if (computerSelection === "scissors") {
      winRoundMsg(playerSelection, computerSelection);
      return "player";
    } else {
      loseRoundMsg(playerSelection, computerSelection);
      return "computer";
    }
  }
  if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      winRoundMsg(playerSelection, computerSelection);
      return "player";
    } else {
      loseRoundMsg(playerSelection, computerSelection);
      return "computer";
    }
  }
  if (playerSelection === "scissors") {
    if (computerSelection === "paper") {
      winRoundMsg(playerSelection, computerSelection);
      return "player";
    } else {
      loseRoundMsg(playerSelection, computerSelection);
      return "computer";
    }
  }
}

function capitalize(text) {
  let firstLetter = text.slice(0, 1);
  firstLetter = firstLetter.toUpperCase();
  text = text.slice(1);
  return firstLetter.concat(text);
}
function winRoundMsg(playerSelection, computerSelection) {
  roundText.textContent = `You win! ${capitalize(
    playerSelection
  )} beats ${capitalize(computerSelection)}`;
}
function loseRoundMsg(playerSelection, computerSelection) {
  roundText.textContent = `You lose! ${capitalize(
    computerSelection
  )} beats ${capitalize(playerSelection)}`;
}
function tieRoundMsg(playerSelection, computerSelection) {
  roundText.textContent = `It's a tie! ${capitalize(
    playerSelection
  )} ties with ${capitalize(computerSelection)}`;
}
