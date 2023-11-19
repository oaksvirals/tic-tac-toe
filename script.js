// ---- DOM Controller ----
// 1) Build play area with buttons
const gameArea = document.querySelector('.game');
const btn0 = document.createElement('button');
const btn1 = document.createElement('button');
const btn2 = document.createElement('button');
const btn3 = document.createElement('button');
const btn4 = document.createElement('button');
const btn5 = document.createElement('button');
const btn6 = document.createElement('button');
const btn7 = document.createElement('button');
const btn8 = document.createElement('button');

gameArea.appendChild(btn0);
gameArea.appendChild(btn1);
gameArea.appendChild(btn2);
gameArea.appendChild(btn3);
gameArea.appendChild(btn4);
gameArea.appendChild(btn5);
gameArea.appendChild(btn6);
gameArea.appendChild(btn7);
gameArea.appendChild(btn8);

btn0.setAttribute('class', 'btn0');
btn1.setAttribute('class', 'btn1');
btn2.setAttribute('class', 'btn2');
btn3.setAttribute('class', 'btn3');
btn4.setAttribute('class', 'btn4');
btn5.setAttribute('class', 'btn5');
btn6.setAttribute('class', 'btn6');
btn7.setAttribute('class', 'btn7');
btn8.setAttribute('class', 'btn8');

btn0.addEventListener('click', selectSquare);
btn1.addEventListener('click', selectSquare);
btn2.addEventListener('click', selectSquare);
btn3.addEventListener('click', selectSquare);
btn4.addEventListener('click', selectSquare);
btn5.addEventListener('click', selectSquare);
btn6.addEventListener('click', selectSquare);
btn7.addEventListener('click', selectSquare);
btn8.addEventListener('click', selectSquare);

function selectSquare() {
    switch (this) {
        case btn0:
            this.textContent = currentPlayer;
            game().playRound(0, 0);
        break;
        case btn1:
            this.textContent = currentPlayer;
            game().playRound(0, 1);
        break;
        case btn2:
            this.textContent = currentPlayer;
            game().playRound(0, 2);
        break;
        case btn3:
            this.textContent = currentPlayer;
            game().playRound(1, 0);
        break;
        case btn4:
            this.textContent = currentPlayer;
            game().playRound(1, 1);
        break;
        case btn5:
            this.textContent = currentPlayer;
            game().playRound(1, 2);
        break;
        case btn6:
            this.textContent = currentPlayer;
            game().playRound(2, 0);
        break;
        case btn7:
            this.textContent = currentPlayer;
            game().playRound(2, 1);
        break;
        case btn8:
            this.textContent = currentPlayer;
            game().playRound(2, 2);
        break;
    }
};

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
