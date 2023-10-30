// Get player choice:
// Ask the player for their choice
// Transform choice to lower case
// Save choice in variable

// Get computer choice:
function getComputerChoice() {
  // Create array with choice
  const computerChoices = ["rock", "paper", "scissors"];
  // Select random choice from options
  let selector = Math.floor(Math.random() * 3);
  // Save choice in variable
  return computerChoices[selector];
}

// Count points:
// Make variables for player and computer points
// If won the match points plus one
// If points get to three end game

// Compare both choices:
// Same choice => tie
// Rock beats scissors
// Paper beats rock
// Scissors beast paper
