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
// You will need an array of 9 entries playedCells to hold the choices of the players. (you can start with empty strings, and then it will be filled with x and o)
const playedCells = ["", "", "", "", "", "", "", "", ""];

// Keep track of the current player (in a variable) and assign it to x or o
const player1 = "Player one";
const player2 = "Player two";

const player1Play = "X";
const player2Play = "O";

const color1 = "#385F71";
const color2 = "#D7B377";

const player1Turn = `${player1} turn : click a cell to put an ${player1Play}`;
const player2Turn = `${player2} turn : click a cell to put an ${player2Play}`;

let winner;

const gameOver = `Game over ${winner} won the game`;

// Keep track if the game is running or over
// In the initialization of the game, add an event listener to each cell.
// When a cell is clicked, fill the playedCells with the current player in the correct position
// Check if there is a win comparing the winCombinations array to the playedCells
