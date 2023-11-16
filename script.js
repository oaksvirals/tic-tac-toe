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
    for (let i = 0; i < rows; i++) {
        board[i] = [];
        for (let j = 0; j < columns; j++) {
            board[i].push(0);
        }
    };

    function playRound(row, col) {
            board[row][col] = activePlayer.token;
            changePlayer();
            checkWinner();
            printBoard();
    };

    function changePlayer() {
        return activePlayer = activePlayer === players[0] ? players[1] : players[0];
    };

    function checkWinner(token) {
        // check horizontal wins
        if (board[0][0] === token && board[0][1] === token && board[0][2] === token) {
            winner = 'Player ' + token + ' wins!'
        } else if (board[1][0] === token && board[1][1] === token && board[1][2] === token) {
            winner = 'Player ' + token + ' wins!'
        } else if (board[2][0] === token && board[2][1] === token && board[2][2] === token) {
            winner = 'Player ' + token + ' wins!'
        };

        // check vertical wins
        if (board[0][0] === token && board[1][0] === token && board[2][0] === token) {
            winner = 'Player ' + token + ' wins!'
        } else if (board[0][1] === token && board[1][1] === token && board[2][1] === token) {
            winner = 'Player ' + token + ' wins!'
        } else if (board[0][2] === token && board[1][2] === token && board[2][2] === token) {
            winner = 'Player ' + token + ' wins!'
        };

        // check diagnal wins
        if (board[0][0] === token && board[1][1] === token && board[2][2] === token) {
            winner = 'Player ' + token + ' wins!'
        } else if (board[0][2] === token && board[1][1] === token && board[2][0] === token) {
            winner = 'Player ' + token + ' wins!'
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