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

// then the player div to hold 3 buttons
const playerSelectionDiv = document.createElement('div');
playerSelectionDiv.classList.add('playerSelectionDiv');
rockPaperScissorsDiv.appendChild(playerSelectionDiv);

// lets create the three buttons here
//ROCK
const rpsRockButton = document.createElement('button');
rpsRockButton.classList.add('rpsButton');
rpsRockButton.textContent = 'ROCK';
playerSelectionDiv.appendChild(rpsRockButton);

//PAPER
const rpsPaperButton = document.createElement('button');
rpsPaperButton.classList.add('rpsButton');
rpsPaperButton.textContent = 'PAPER';
playerSelectionDiv.appendChild(rpsPaperButton);

//SCISSOR
const rpsScissorsButton = document.createElement('button');
rpsScissorsButton.classList.add('rpsButton');
rpsScissorsButton.textContent = 'SCISSORS';
playerSelectionDiv.appendChild(rpsScissorsButton);

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
    game(button.id);
    button.classList.add('playing');
  });
});

function removeTransition(e){
  console.log(e);
  if(e.propertyName != 'transform') return;

  this.classList.remove('playing');
}

function game(playerSelection) {
  


  

  const computerSelection = computerRPSPlay();
  computerSelectionDisplay.textContent = `Computer selected ${computerSelection}`;
  const winOrLose = playRPSRound(computerSelection, playerSelection);
  if (winOrLose == "You win!") {
    console.log(playerWins);
    playerWins++;
    

  } else if (winOrLose == "You lose!") {
    computerWins++;
  }

  playerScoreDisplay.textContent = `You have won ${playerWins} games.`;
  computerScoreDisplay.textContent = `The computer has won ${computerWins} games.`;

  // console.log(playRound(computerSelection, playerSelection));



  if (playerWins == 5) {
    alert(`You won ${playerWins} games, the majority, nice job!`);
  } 

  if (computerWins == 5) {
    alert(`The computer won ${computerWins} games, the majority, too bad!`);
  }


}













