function getPlayerChoice() {
  let playerSelection = prompt("Your choice?");
  playerSelection = playerSelection.toLowerCase();
  switch (playerSelection) {
    case "rock":
    case "paper":
    case "scissors":
      break;
    default:
      console.log("Choose a valid move.");
      return getPlayerChoice();
  }
  return playerSelection;
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

function game() {
  let playerPoints = 0;
  let computerPoints = 0;

  let roundCount = 0;

  let keepGoing = true;
  while (keepGoing) {
    let thisRound = playRound(getPlayerChoice(), getComputerChoice());

    if (thisRound === "player") {
      playerPoints += 1;
    } else if (thisRound === "computer") {
      computerPoints += 1;
    } else {
      playerPoints += 1;
      computerPoints += 1;
    }
    console.log(`You: ${playerPoints} | Computer: ${computerPoints}`);

    roundCount += 1;

    if (roundCount == 5) {
      if (playerPoints > computerPoints) {
        console.log("You win! Congrats!");
      } else if (playerPoints < computerPoints) {
        console.log("You lose! Better luck next time!");
      } else {
        console.log("It's a tie! Try again!");
      }
      keepGoing = false;
    }
  }

  if (confirm("Play again?")) {
    return game();
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

playBtn = document.querySelector("#play");
divText = document.querySelector(".text-container p");

document.addEventListener("click", (e) => {
  switch (e.target) {
    case playBtn:
      playBtn.style.display = "none";
      divText.textContent = "Make your choice:";
  }
});
