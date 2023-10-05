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
const player1 = "Player one";
const player2 = "Player two";

const player1Play = "X";
const player2Play = "O";

const color1 = "#385F71";
const color2 = "#D7B377";

const player1Turn = `${player1} turn : click a cell to put an ${player1Play}`;
const player2Turn = `${player2} turn : click a cell to put an ${player2Play}`;

let winner;
let currentPlayer;

const gameOver = `Game over ${winner} won the game`;

// Keep track if the game is running or over
let msg = document.querySelector(".message");
msg.innerText = player1Turn;

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
