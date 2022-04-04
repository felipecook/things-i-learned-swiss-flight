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

















