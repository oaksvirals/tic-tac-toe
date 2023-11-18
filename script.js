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

        function playRound(row, col) {

            const symbol = currentPlayer;

            if (board[row][col] === 0) {
                board[row][col] = symbol;
                switchPlayer();
            } else {
                return;
            }
        };

        return { playRound }

};
