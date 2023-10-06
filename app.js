const restart = document.querySelector(".restart");

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

const board = document.querySelector(".board");

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

const player1 = "X";
const player2 = "O";

const player1Turn = `Player One turn: click a cell to put a X`;
const player2Turn = `Player Two turn: click a cell to put a O`;

let isPlayer1 = true;

const gameOver1 = `Game over, Player One won the game !!
  Click the reset button to play again :)`;
const gameOver2 = `Game over, Player Two won the game !!
  Click the reset button to play again :)`;
const draw = `It's a draw !
Click the reset button to play again :)`;

let gameRunning = true;

const msg = document.querySelector(".message");
msg.innerText = player1Turn;

function whoPlays(e, num) {
  if (gameRunning == true) {
    if (isPlayer1 == true) {
      e.style.color = "#385F71";
      msg.innerText = player2Turn;
      turn(player1, e, num);
      isPlayer1 = false;
    } else if (isPlayer1 == false) {
      e.style.color = "rgba(215, 179, 119, 1)";
      msg.innerText = player1Turn;
      turn(player2, e, num);
      isPlayer1 = true;
    }
  }
}

function turn(play, e, num) {
  if (e.innerText == "") {
    e.innerText = play;
    playedCells[num] = play;
    win();
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
      gameRunning = false;
      return msg.innerText;
    }
  });
}

function test() {
  console.log("test");
}

cell0.addEventListener("click", (e) => {
  whoPlays(cell0, 0);
});

cell1.addEventListener("click", (e) => {
  whoPlays(cell1, 1);
});

cell2.addEventListener("click", (e) => {
  whoPlays(cell2, 2);
});

cell3.addEventListener("click", (e) => {
  whoPlays(cell3, 3);
});

cell4.addEventListener("click", (e) => {
  whoPlays(cell4, 4);
});

cell5.addEventListener("click", (e) => {
  whoPlays(cell5, 5);
});

cell6.addEventListener("click", (e) => {
  whoPlays(cell6, 6);
});

cell7.addEventListener("click", (e) => {
  whoPlays(cell7, 7);
});

cell8.addEventListener("click", (e) => {
  whoPlays(cell8, 8);
});

restart.addEventListener("click", (e) => {
  playedCells[0] = "";
  playedCells[1] = "";
  playedCells[2] = "";
  playedCells[3] = "";
  playedCells[4] = "";
  playedCells[5] = "";
  playedCells[6] = "";
  playedCells[7] = "";
  playedCells[8] = "";
  isPlayer1 = true;
  msg.innerText = player1Turn;
  cell0.innerText = "";
  cell1.innerText = "";
  cell2.innerText = "";
  cell3.innerText = "";
  cell4.innerText = "";
  cell5.innerText = "";
  cell6.innerText = "";
  cell7.innerText = "";
  cell8.innerText = "";
  gameRunning = true;
});
