let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameOver = false;

const statusText = document.getElementById("status");
const cells = document.getElementsByClassName("cell");

const winConditions = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
];

function makeMove(index) {
    if (board[index] !== "" || gameOver) return;

    board[index] = currentPlayer;
    cells[index].innerText = currentPlayer;

    if (checkWinner()) {
        statusText.innerText = `Player ${currentPlayer} Wins!`;
        gameOver = true;
        return;
    }

    if (board.every(cell => cell !== "")) {
        statusText.innerText = "It's a Draw!";
        gameOver = true;
        return;
    }

    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusText.innerText = `Player ${currentPlayer}'s Turn`;
}

function checkWinner() {
    return winConditions.some(condition =>
        condition.every(index => board[index] === currentPlayer)
    );
}

function resetGame() {
    board = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    gameOver = false;
    statusText.innerText = "Player X's Turn";

    for (let cell of cells) {
        cell.innerText = "";
    }
}
