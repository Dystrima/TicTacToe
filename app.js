const winCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// We are going to use the strategy of putting the letters x and o inside the divs in order to play the game.
const board = document.querySelector(".board");
// You will need an array of 9 entries playedCells to hold the choices of the players. (you can start with empty strings, and then it will be filled with x and o)
const playedCells = ["", "", "", "", "", "", "", "", ""];
const cell0 = board.firstElementChild;
const cell1 = cell0.nextElementSibling;
const cell2 = cell1.nextElementSibling;
const cell3 = cell2.nextElementSibling;
const cell4 = cell3.nextElementSibling;
const cell5 = cell4.nextElementSibling;
const cell6 = cell5.nextElementSibling;
const cell7 = cell6.nextElementSibling;
const cell8 = cell7.nextElementSibling;

// Keep track of the current player (in a variable) and assign it to x or o
const player1 = "X";
const player2 = "O";
const color1 = "#385F71";
const color2 = "#D7B377";

const player1Turn = `Player One turn: click a cell to put a X`;
const player2Turn = `Player Two turn: click a cell to put a O`;

let isPlayer1 = true;

const gameOver1 = `Game over, Player One won the game !!
  Click the reset button to play again :)`;
const gameOver2 = `Game over, Player Two won the game !!
  Click the reset button to play again :)`;

// Keep track if the game is running or over
const msg = document.querySelector(".message");
msg.innerText = player1Turn;

function whoPlays(e) {
  if (isPlayer1 == true) {
    e.style.color = color1;
    turn(player1, e);
    isPlayer1 = false;
  } else if (isPlayer1 == false) {
    e.style.color = color2;
    turn(player2, e);
    isPlayer1 = true;
  }
  // if game is over, no one plays mais on annonce le winner
  // restart on supprime dans l'array et on recommence avec player1
}

function turn(play, e) {
  // La cell est vide on met un xo
  if ((e.innerText = "")) {
    e.innerText = play;
    playedCells[num] = play;
    // On check si y'a une combinaison gagnante xo
    win();
  } else {
    if (isPlayer1 == true) {
      msg.innerText = `Please select a valid cell Player One`;
    } else {
      msg.innerText = `Please select a valid cell Player Two`;
    }
  }
}

function win() {
  winCombinations.forEach((item) => {
    if (
      playedCells[item[0]] != "" &&
      playedCells[item[0]] == playedCells[item[1]] &&
      playedCells[item[0]] == playedCells[item[2]]
    ) {
      if (playedCells[item[0]] == player1) {
        msg.innerText = gameOver1;
      } else {
        msg.innerText = gameOver2;
      }
      return msg.innerText;
    }
  });
}

// In the initialization of the game, add an event listener to each cell.

board.addEventListener("click", (e) => {});

// cell 0
cell0.addEventListener("click", (e) => {});

// cell 1
cell1.addEventListener("click", (e) => {});

// cell 2
cell2.addEventListener("click", (e) => {});

// cell 3
cell3.addEventListener("click", (e) => {});

// cell 4
cell4.addEventListener("click", (e) => {});

// cell 5
cell5.addEventListener("click", (e) => {});

// cell 6
cell6.addEventListener("click", (e) => {});

// cell 7
cell7.addEventListener("click", (e) => {});

// cell 8
cell8.addEventListener("click", (e) => {});

// When a cell is clicked, fill the playedCells with the current player in the correct position
// Check if there is a win comparing the winCombinations array to the playedCells
