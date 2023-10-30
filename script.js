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
// Compare both choices:
// Same choice => tie
// Rock beats scissors
// Paper beats rock
// Scissors beast paper
// Count points:
// If won the match points plus one

// Make variables for player and computer points
// If points get to three end game

// Extra:
// Capitalize function
function capitalize(text) {
  let firstLetter = text.slice(0, 1);
  firstLetter = firstLetter.toUpperCase();
  text = text.slice(1);
  return firstLetter.concat(text);
}
