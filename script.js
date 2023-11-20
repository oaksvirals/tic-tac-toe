// ---- Gameboard Setup ----
const gameboard = (function () {
  let board = [];

  const newBoard = (function () {
    for (let i = 0; i < 3; i++) {
      board[i] = [];
      for (let j = 0; j < 3; j++) {
        board[i].push(0);
      }
    }
  })();

  const getBoard = () => board;

  const printBoard = () => console.log(board);
  // printBoard();

  return { getBoard, printBoard };
})();

// ---- Player Actions ----
// 1) Player setup
function players() {
  const playerOne = {
    name: "Player One",
    mark: "X",
  };

  const playerTwo = {
    name: "Player Two",
    mark: "O",
  };

  const getPlayerOne = () => playerOne;
  const getPlayerTwo = () => playerTwo;

  return { getPlayerOne, getPlayerTwo };
}

let currentPlayer = players().getPlayerOne().mark;

function switchPlayer() {
  return (currentPlayer =
    currentPlayer === players().getPlayerOne().mark
      ? players().getPlayerTwo().mark
      : players().getPlayerOne().mark);
}

// ---- DOM Controller ----
const gameArea = document.querySelector(".game");
const btns = Array.from({ length: 9 }, () => {
  return document.createElement("button");
});

btns.forEach((btn, index) => {
  btn.setAttribute("class", "btn" + index);
  btn.addEventListener("click", selectSquare);
  gameArea.appendChild(btn);
});

function selectSquare() {
  switch (this) {
    case btns[0]:
      if (this.textContent !== "") {
        return;
      } else {
        this.textContent = currentPlayer;
      }
      game().playRound(0, 0);
      break;

    case btns[1]:
      if (this.textContent !== "") {
        return;
      } else {
        this.textContent = currentPlayer;
      }
      game().playRound(0, 1);
      break;

    case btns[2]:
      if (this.textContent !== "") {
        return;
      } else {
        this.textContent = currentPlayer;
      }
      game().playRound(0, 2);
      break;

    case btns[3]:
      if (this.textContent !== "") {
        return;
      } else {
        this.textContent = currentPlayer;
      }
      game().playRound(1, 0);
      break;

    case btns[4]:
      if (this.textContent !== "") {
        return;
      } else {
        this.textContent = currentPlayer;
      }
      game().playRound(1, 1);
      break;

    case btns[5]:
      if (this.textContent !== "") {
        return;
      } else {
        this.textContent = currentPlayer;
      }
      game().playRound(1, 2);
      break;

    case btns[6]:
      if (this.textContent !== "") {
        return;
      } else {
        this.textContent = currentPlayer;
      }
      game().playRound(2, 0);
      break;

    case btns[7]:
      if (this.textContent !== "") {
        return;
      } else {
        this.textContent = currentPlayer;
      }
      game().playRound(2, 1);
      break;

    case btns[8]:
      if (this.textContent !== "") {
        return;
      } else {
        this.textContent = currentPlayer;
      }
      game().playRound(2, 2);
      break;
  }
}

// ---- Game Mechanics ----
// 1) playRound - update board with mark, check it's not used already.
// 2) checkWin - check for win conditions or draw and announce it
// 3) restartGame - clear board and variables and start fresh
function game() {
  const announcement = document.querySelector(".announcement");
  const playerOneWinner = document.createElement("h2");
  const playerTwoWinner = document.createElement("h2");
  const tie = document.createElement("h2");

  const board = gameboard.getBoard();
  const symbol = currentPlayer;
  let winner = null;

  function playRound(row, col) {
    if (board[row][col] === 0) {
      board[row][col] = symbol;
      checkWin();
      switchPlayer();
    } else if (board[row][col] !== 0) {
      return;
    }
  }

  function checkWin() {
    // check mark, find winner name, announce winner
    function announceWinner() {
      if (winner !== null) {
        if (winner === "X") {
          playerTwoWinner.remove();
          tie.remove();
          announcement.appendChild(playerOneWinner);
          playerOneWinner.textContent = "Player One Wins!";
        } else if (winner === "O") {
          playerOneWinner.remove();
          tie.remove();
          announcement.appendChild(playerTwoWinner);
          playerTwoWinner.textContent = "Player Two Wins!";
        } else if (winner === "none") {
          playerTwoWinner.remove();
          playerOneWinner.remove();
          announcement.appendChild(tie);
          tie.textContent = "It's a tie!";
        }
      }

      btns.forEach((btn) => (btn.disabled = true));
    }

    // draw
    if (
      board[0][0] !== 0 &&
      board[0][1] !== 0 &&
      board[0][2] !== 0 &&
      board[1][0] !== 0 &&
      board[1][1] !== 0 &&
      board[1][2] !== 0 &&
      board[2][0] !== 0 &&
      board[2][1] !== 0 &&
      board[2][2] !== 0
    ) {
      winner = "none";
      announceWinner();
    }

    // horizontal wins
    if (
      board[0][0] === symbol &&
      board[0][1] === symbol &&
      board[0][2] === symbol
    ) {
      winner = symbol;
      announceWinner();
    } else if (
      board[1][0] === symbol &&
      board[1][1] === symbol &&
      board[1][2] === symbol
    ) {
      winner = symbol;
      announceWinner();
    } else if (
      board[2][0] === symbol &&
      board[2][1] === symbol &&
      board[2][2] === symbol
    ) {
      winner = symbol;
      announceWinner();
    }
    // vertical wins
    if (
      board[0][0] === symbol &&
      board[1][0] === symbol &&
      board[2][0] === symbol
    ) {
      winner = symbol;
      announceWinner();
    } else if (
      board[0][1] === symbol &&
      board[1][1] === symbol &&
      board[2][1] === symbol
    ) {
      winner = symbol;
      announceWinner();
    } else if (
      board[0][2] === symbol &&
      board[1][2] === symbol &&
      board[2][2] === symbol
    ) {
      winner = symbol;
      announceWinner();
    }

    // diagnal wins
    if (
      board[0][0] === symbol &&
      board[1][1] === symbol &&
      board[2][2] === symbol
    ) {
      winner = symbol;
      announceWinner();
    } else if (
      board[0][2] === symbol &&
      board[1][1] === symbol &&
      board[2][0] === symbol
    ) {
      winner = symbol;
      announceWinner();
    }
  }

  const restartButton = document.querySelector(".btn-restart");
  restartButton.addEventListener("click", restartGame);

  function restartGame() {
    winner = null;

    board[0][0] = 0;
    board[0][1] = 0;
    board[0][2] = 0;
    board[1][0] = 0;
    board[1][1] = 0;
    board[1][2] = 0;
    board[2][0] = 0;
    board[2][1] = 0;
    board[2][2] = 0;

    btns.forEach((btn) => {
      btn.textContent = "";
      btn.disabled = false;
    });

    playerOneWinner.remove();
    playerTwoWinner.remove();
    tie.remove();

    currentPlayer = players().getPlayerOne().mark;
  }

  return { playRound };
}
