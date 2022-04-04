// We want to generate all the DOM structure using JS, with a basic container structure holding together the parts. 
// Only one parent element which is container
// The Holy Grail uses a main header and then a sidebar and a main page, the sidebar links to the different parts of the 
// main page, and a footer at the bottom

const masterPage = document.querySelector('.container');
console.log(masterPage);


// creates the header
const header = document.createElement('div');
header.classList.add('header');
console.log(header);
header.innerText = 'Top of Website';
masterPage.appendChild(header);


// create inner container that will hold sidebar on left side and the main page on right side.
const innerContainer = document.createElement('div');
innerContainer.classList.add('innerContainer');
masterPage.appendChild(innerContainer);


// create sidebar
const sidebar = document.createElement('div');
sidebar.classList.add('sidebar');
innerContainer.appendChild(sidebar);



// create the main page
const mainPage = document.createElement('div');
mainPage.classList.add('mainPage');
innerContainer.appendChild(mainPage);


//creates the footer
const footer = document.createElement('div');
footer.classList.add('footer');
footer.innerText = 'Bottom of website';
masterPage.appendChild(footer);


// Create the NAV list that will go into the sidebar
const unorderedSidebarList = document.createElement('ul');
console.log(unorderedSidebarList);
sidebar.appendChild(unorderedSidebarList);


//Create a list Item, and insert an anchor tag in it to link to main page area
let listItem = document.createElement('li');
let anchorItem = document.createElement('a');
anchorItem.href = '';


// Add the Rock Paper Scissors game we made to the main page

//First the rps Div to hold it all
const rockPaperScissorsDiv = document.createElement('div');
rockPaperScissorsDiv.classList.add('rpsGameContainer');
mainPage.appendChild(rockPaperScissorsDiv);

// Adds a header to the RPS game
const headerForRockPaperScissors = document.createElement('h3');
headerForRockPaperScissors.textContent = 'Play Rock Paper Scissors';
headerForRockPaperScissors.classList.add('headers');
rockPaperScissorsDiv.appendChild(headerForRockPaperScissors);

// then the player div to hold 3 buttons
const playerSelectionDiv = document.createElement('div');
playerSelectionDiv.classList.add('playerRPSSelectionDiv');
rockPaperScissorsDiv.appendChild(playerSelectionDiv);

//this holds the RPS Score and Computer Selection
const rPSScoreAndCompSelectionDiv = document.createElement('div');
rPSScoreAndCompSelectionDiv.classList = 'rPSScoreAndCompSelectionDiv';
rockPaperScissorsDiv.appendChild(rPSScoreAndCompSelectionDiv);

// lets create the three buttons here
//ROCK
const rpsRockButton = document.createElement('button');
rpsRockButton.id = 'rock';
rpsRockButton.classList.add('rpsButton');
rpsRockButton.textContent = 'ROCK';
playerSelectionDiv.appendChild(rpsRockButton);

//PAPER
const rpsPaperButton = document.createElement('button');
rpsPaperButton.classList.add('rpsButton');
rpsPaperButton.id = 'paper';
rpsPaperButton.textContent = 'PAPER';
playerSelectionDiv.appendChild(rpsPaperButton);

//SCISSOR
const rpsScissorsButton = document.createElement('button');
rpsScissorsButton.classList.add('rpsButton');
rpsScissorsButton.id = 'scissors';
rpsScissorsButton.textContent = 'SCISSORS';
playerSelectionDiv.appendChild(rpsScissorsButton);

// Grabs the Score displays and the Computer Selection Display and Appends to the rPSScoreAndCompSelectionDiv
const playerRPSScoreDisplay = document.createElement('div');
playerRPSScoreDisplay.id = 'playerRPSScoreDisplay';
rPSScoreAndCompSelectionDiv.appendChild(playerRPSScoreDisplay);

const computerRPSScoreDisplay = document.createElement('div');
computerRPSScoreDisplay.id = 'computerRPSScoreDisplay';
rPSScoreAndCompSelectionDiv.appendChild(computerRPSScoreDisplay);

const computerRPSSelectionDisplay = document.createElement('div');
computerRPSSelectionDisplay.id = 'computerRPSSelectionDisplay';
rPSScoreAndCompSelectionDiv.appendChild(computerRPSSelectionDisplay);

// These two variables track the wins on both sides
let playerRPSWins = 0;
let computerRPSWins = 0;

// These 4 functions run the RPS game for us. 
function playRPSRound(computerSelection, playerSelection) {
  switch (computerSelection) {
    case "rock":
      if (playerSelection == "rock") {
        console.log("You tie!");
        return "You tie!";
      } else if (playerSelection == "paper") {
        console.log("You win!");
        return "You win!";
      } else if (playerSelection == "scissors") {
        console.log("You lose!");
        return "You lose!";
      } else {
        console.log("invalid user entry!")
        return "You fucked up!"
      }
    case "paper":
      if (playerSelection == "rock") {
        console.log("You lose!");
        return "You lose!";
      } else if (playerSelection == "paper") {
        console.log("You tie!");
        return "You tie!";
      } else if (playerSelection == "scissors") {
        console.log("You win!");
        return "You win!";
      } else {
        console.log("invalid user entry!")
        return "You fucked up!"
      }
    case "scissors":
      if (playerSelection == "rock") {
        console.log("You win!");
        return "You win!";
      } else if (playerSelection == "paper") {
        console.log("You lose!");
        return "You lose!";
      } else if (playerSelection == "scissors") {
        console.log("You tie!");
        return "You tie!";
      } else {
        console.log("invalid user entry!")
        return "You fucked up!"
      }
    default:
      console.log("invalid user entry!")
      return "You fucked up!"
  }

}

function computerRPSPlay() {
  const arr = ["rock", "paper", "scissors"];
  let choice = Math.floor(Math.random() * (3 - 0) + 0);
  console.log(arr[choice]);
  return arr[choice];
}

const rPSButtons = document.querySelectorAll('.rpsButton');
rPSButtons.forEach((button) => {

  button.addEventListener('click', () => {
    console.log(button.id);
    rPSgame(button.id);
    button.classList.add('playing');
  });
});

function removeTransition(e){
  console.log(e);
  if(e.propertyName != 'transform') return;

  this.classList.remove('playing');
}

function rPSgame(playerSelection) {

  const computerSelection = computerRPSPlay();
  computerRPSSelectionDisplay.textContent = `Computer selected ${computerSelection}`;
  const winOrLose = playRPSRound(computerSelection, playerSelection);
  if (winOrLose == "You win!") {
    playerRPSWins++;
  } else if (winOrLose == "You lose!") {
    computerRPSWins++;
  }

  playerRPSScoreDisplay.textContent = `You have won ${playerRPSWins} games.`;
  computerRPSScoreDisplay.textContent = `The computer has won ${computerRPSWins} games.`;

  if (playerWins == 5) {
    alert(`You won ${playerRPSWins} games, the majority, nice job!`);
  } 

  if (computerWins == 5) {
    alert(`The computer won ${computerRPSWins} games, the majority, too bad!`);
  }

}













