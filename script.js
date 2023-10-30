// Get player choice:
function getPlayerChoice() {
  // Ask the player for their choice
  let playerSelection = prompt("Your choice?");
  // Transform choice to lower case
  playerSelection = playerSelection.toLowerCase();
  // Make sure it's a valid choice
  switch (playerSelection) {
    case "rock":
    case "paper":
    case "scissors":
      break;
    default:
      console.log("Choose a valid move.");
      getPlayerChoice();
  }
  // return choice
  return playerSelection;
}

// Get computer choice:
function getComputerChoice() {
  // Create array with choice
  const computerSelection = ["rock", "paper", "scissors"];
  // Select random choice from options
  let selector = Math.floor(Math.random() * 3);
  // return choice
  return computerSelection[selector];
}

// One round:
function playRound(playerSelection, computerSelection) {
  // Compare both choices:
  // Same choice => tie
  if (playerSelection == computerSelection) {
    tieRoundMsg(playerSelection, computerSelection);
    return "tie";
  }
  if (playerSelection === "rock") {
    // Rock beats scissors
    if (computerSelection === "scissors") {
      winRoundMsg(playerSelection, computerSelection);
      return "player";
    } else {
      loseRoundMsg(playerSelection, computerSelection);
      return "computer";
    }
  }
  if (playerSelection === "paper") {
    // Paper beats rock
    if (computerSelection === "rock") {
      winRoundMsg(playerSelection, computerSelection);
      return "player";
    } else {
      loseRoundMsg(playerSelection, computerSelection);
      return "computer";
    }
  }
  if (playerSelection === "scissors") {
    // Scissors beats paper
    if (computerSelection === "paper") {
      winRoundMsg(playerSelection, computerSelection);
      return "player";
    } else {
      loseRoundMsg(playerSelection, computerSelection);
      return "computer";
    }
  }
}

// One game:
function game() {
  // Count points:
  // Make variables for player and computer points
  let playerPoints = 0;
  let computerPoints = 0;

  // Game loop
  let keepGoing = true;
  while (keepGoing) {
    let thisRound = playRound(getPlayerChoice(), getComputerChoice());

    // If won the round points plus one
    if (thisRound === "player") {
      playerPoints += 1;
    } else if (thisRound === "computer") {
      computerPoints += 1;
    } else {
      playerPoints += 1;
      computerPoints += 1;
    }
    // Display actual points
    console.log(`You: ${playerPoints} | Computer: ${computerPoints}`);

    // If points get to five end game
    if (playerPoints == 5) {
      console.log("You win! Congrats!");
      keepGoing = false;
    } else if (computerPoints == 5) {
      console.log("You lose! Better luck next time!");
      keepGoing = false;
    }
  }

  // Play again
  if (confirm("Play again?")) {
    return game();
  }
}

// Extra:
// Capitalize function
function capitalize(text) {
  let firstLetter = text.slice(0, 1);
  firstLetter = firstLetter.toUpperCase();
  text = text.slice(1);
  return firstLetter.concat(text);
}
// Announce won round
function winRoundMsg(playerSelection, computerSelection) {
  console.log(
    `You win! ${capitalize(playerSelection)} beats ${capitalize(
      computerSelection
    )}`
  );
}
// Announce lost round
function loseRoundMsg(playerSelection, computerSelection) {
  console.log(
    `You lose! ${capitalize(computerSelection)} beats ${capitalize(
      playerSelection
    )}`
  );
}
// Announce tied round
function tieRoundMsg(playerSelection, computerSelection) {
  console.log(
    `It's a tie! ${capitalize(playerSelection)} ties ${capitalize(
      computerSelection
    )}`
  );
}
