playBtn = document.querySelector("#play");
divText = document.querySelector(".text-container p");

choiceBtnList = document.querySelectorAll(".choice-btn");
rockBtn = choiceBtnList[0];
paperBtn = choiceBtnList[1];
scissorsBtn = choiceBtnList[2];

document.addEventListener("click", (e) => {
  switch (e.target) {
    case playBtn:
      playBtn.style.display = "none";
      divText.textContent = "Make your choice:";
      for (btn of choiceBtnList) {
        btn.style.display = "flex";
      }
  }
});

function game() {
  let points = [0, 0];
  let thisRound;

  document.addEventListener("click", (e) => {
    switch (e.target) {
      case rockBtn:
        thisRound = playRound("rock", getComputerChoice());
        break;
      case paperBtn:
        thisRound = playRound("paper", getComputerChoice());
        break;
      case scissorsBtn:
        thisRound = playRound("scissors", getComputerChoice());
        break;
    }
  });
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
  console.log(
    `You win! ${capitalize(playerSelection)} beats ${capitalize(
      computerSelection
    )}`
  );
}
function loseRoundMsg(playerSelection, computerSelection) {
  console.log(
    `You lose! ${capitalize(computerSelection)} beats ${capitalize(
      playerSelection
    )}`
  );
}
function tieRoundMsg(playerSelection, computerSelection) {
  console.log(
    `It's a tie! ${capitalize(playerSelection)} ties ${capitalize(
      computerSelection
    )}`
  );
}
