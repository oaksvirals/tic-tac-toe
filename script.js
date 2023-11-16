const game = (function() {
    const columns = 3;
    const rows = 3;
    const board = [];
    const players = [{name: 'Player One', token: 1},{name: 'Player Two', token: 2}];
    let activePlayer = players[0];
    let movesLeft = 9;
    let winner = '';

    // getFunctions for export
    const getBoard = () => board;
    const getActivePlayer = () => activePlayer.name;

    // init board
    const initBoard = () => {
        for (let i = 0; i < rows; i++) {
            board[i] = [];
            for (let j = 0; j < columns; j++) {
                board[i].push(0);
            }
        };

        movesLeft = 9;
        winner = '';
    };

    initBoard();

    function playRound(row, col) {
            movesLeft--;
            board[row][col] = activePlayer.token;
            changePlayer();
            checkWinner();
            printBoard();
    };

    function changePlayer() {
        return activePlayer = activePlayer === players[0] ? players[1] : players[0];
    };

    function checkWinner(token) {
        if (movesLeft > 0) {
            if (board[0][0] === token && board[0][1] === token && board[0][2] === token) { // horizontal wins
                winner = 'Player ' + token + ' wins!'
                console.log(winner)
            } else if (board[1][0] === token && board[1][1] === token && board[1][2] === token) {
                winner = 'Player ' + token + ' wins!'
                console.log(winner)
            } else if (board[2][0] === token && board[2][1] === token && board[2][2] === token) {
                winner = 'Player ' + token + ' wins!'
                console.log(winner)
            } else if (board[0][0] === token && board[1][0] === token && board[2][0] === token) { //vertical wins
                winner = 'Player ' + token + ' wins!'
                console.log(winner)
            } else if (board[0][1] === token && board[1][1] === token && board[2][1] === token) {
                winner = 'Player ' + token + ' wins!'
                console.log(winner)
            } else if (board[0][2] === token && board[1][2] === token && board[2][2] === token) {
                winner = 'Player ' + token + ' wins!'
                console.log(winner)
            } else if (board[0][0] === token && board[1][1] === token && board[2][2] === token) { //diagnal wins
                winner = 'Player ' + token + ' wins!'
                console.log(winner)
            } else if (board[0][2] === token && board[1][1] === token && board[2][0] === token) {
                winner = 'Player ' + token + ' wins!'
                console.log(winner)
            };
        } else {
            console.log('Tie!');
        };
    };

    function printBoard() {
        console.log(board);
    };

    printBoard();

    return { 
        playRound,
        getBoard,
        getActivePlayer,
        printBoard,
    };

})();

const displayController = (function() {
    const playArea = document.querySelector('.game');
    // const playButton = document.createElement('button');

    for (let i = 0; i < 9; i++) {
        const playButton = document.createElement('button');
        playArea.appendChild(playButton);
        playButton.setAttribute('class', i)
    }

    // playArea.appendChild(playButton);
    // playButton.setAttribute('class', '0-0');
    // playArea.appendChild(playButton);
    // playButton.setAttribute('class', '0-1');
    // playArea.appendChild(playButton);
    // playButton.setAttribute('class', '0-2');
    // playArea.appendChild(playButton);
    // playButton.setAttribute('class', '1-0');
    // playArea.appendChild(playButton);
    // playButton.setAttribute('class', '1-1');
    // playArea.appendChild(playButton);
    // playButton.setAttribute('class', '1-2');
    // playArea.appendChild(playButton);
    // playButton.setAttribute('class', '2-0');
    // playArea.appendChild(playButton);
    // playButton.setAttribute('class', '2-1');
    // playArea.appendChild(playButton);
    // playButton.setAttribute('class', '2-2');
})();