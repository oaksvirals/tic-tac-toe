// ---- DOM Controller ----
// 1) Build play area with buttons
const gameArea = document.querySelector('.game');

// ---- Gameboard Setup ----
// 1) Initialize newBoard at start.
const gameboard = (function() {
    let board = [];

    const newBoard = () => {
        board = [];

        for (let i = 0; i < 3; i++) {
            board[i] = [];
            for (let j = 0; j < 3; j++) {
                board[i].push(0);
            }
        };
    };
    newBoard();

    const getBoard = () => board;

    const printBoard = () => console.log(board);
    printBoard();

    return { getBoard, newBoard, printBoard }

})();

// ---- Player Actions ----
// 1) Player setup
function players() {
    const playerOne = {
        name: 'Player One',
        mark: 'X',
    };

    const playerTwo = {
        name: 'Player Two',
        mark: 'O',
    };

    const getPlayerOne = () => playerOne;
    const getPlayerTwo = () => playerTwo;

    return { getPlayerOne, getPlayerTwo };
};

let currentPlayer = players().getPlayerOne().mark;

function switchPlayer() {
    return currentPlayer = currentPlayer === players().getPlayerOne().mark ? players().getPlayerTwo().mark : players().getPlayerOne().mark;
};

// ---- Game Mechanics ----
// 1) playRound - update board with mark, check it's not used already.
// 2) checkWin - check for win conditions or draw and announce it
// 3) restartGame - clear board and variables and start fresh
function game() {

        const board = gameboard.getBoard();
        const symbol = currentPlayer;
        let winner = null;

        function playRound(row, col) {

            if (board[row][col] === 0) {
                board[row][col] = symbol;
                checkWin();
                switchPlayer();
            } else {
                return;
            }
        };

        function checkWin() {

            // check mark, find winner name, announce winner
            function announceWinner() {
                if (winner !== null) {
                    if (winner === 'X') {
                        console.log('Player One Wins');
                    } else if (winner === 'O') {
                        console.log('Player Two Wins');
                    } else if (winner === 'none') {
                        console.log('Tie!');
                    };
                }
            }

            // draw
            if (board[0][0] !== 0 &&
                board[0][1] !== 0 &&
                board[0][2] !== 0 &&
                board[1][0] !== 0 &&
                board[1][1] !== 0 &&
                board[1][2] !== 0 &&
                board[2][0] !== 0 &&
                board[2][1] !== 0 &&
                board[2][2] !== 0) {
                winner = 'none';
                announceWinner();
                };

            // horizontal wins
            if (board[0][0] === symbol &&
                board[0][1] === symbol &&
                board[0][2] === symbol) {
                winner = symbol;
                announceWinner();
     } else if (board[1][0] === symbol &&
                board[1][1] === symbol &&
                board[1][2] === symbol) {
                winner = symbol;
                announceWinner();
     } else if (board[2][0] === symbol &&
                board[2][1] === symbol &&
                board[2][2] === symbol) {
                winner = symbol;
                announceWinner();
     };
            // vertical wins
            if (board[0][0] === symbol &&
                board[1][0] === symbol &&
                board[2][0] === symbol) {
                winner = symbol;
                announceWinner();
     } else if (board[0][1] === symbol &&
                board[1][1] === symbol &&
                board[2][1] === symbol) {
                winner = symbol;
                announceWinner();
     } else if (board[0][2] === symbol &&
                board[1][2] === symbol &&
                board[2][2] === symbol) {
                winner = symbol;
                announceWinner();
        };

            // diagnal wins
            if (board[0][0] === symbol &&
                board[1][1] === symbol &&
                board[2][2] === symbol) {
                winner = symbol;
                announceWinner();
     } else if (board[0][2] === symbol &&
                board[1][1] === symbol &&
                board[2][0] === symbol) {
                winner = symbol;
                announceWinner();
        };

        };

        function restartGame() {
            board[0][0] = 0;
            board[0][1] = 0;
            board[0][2] = 0;
            board[1][0] = 0;
            board[1][1] = 0;
            board[1][2] = 0;
            board[2][0] = 0;
            board[2][1] = 0;
            board[2][2] = 0;

            winner = null;
        };

        return { playRound, restartGame }

};
