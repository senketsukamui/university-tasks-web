const BOARD_SIZE = 9
let turn = true;
let isEnded = false;
let checkedPositions = 0;
// The first method that invokes immediately after loading the document
const init = (() => {
    const board = document.querySelector(".tic-tac-toe");
    const boardItem = '<input type="button" class="tic-tac-toe-button">';
    // true - x turn, false - o turn
    for (let i = 0; i < BOARD_SIZE; ++i) {
        board.innerHTML += boardItem
    }

    document.querySelector(".tic-tac-toe").onclick = (event) => {
        if (event.target.value == "") {
            turn ? event.target.value = "x" : event.target.value = "o";
            turn = !turn;

        }
        winnerCheck();
    }

})()

const boardCheck = (boardState, symbol) => {
    if (boardState[0].value === symbol && boardState[1].value === symbol && boardState[2].value === symbol) {
        boardState[0].style.backgroundColor = "green";
        boardState[1].style.backgroundColor = "green";
        boardState[2].style.backgroundColor = "green";
        reloadGame(symbol)

    }

    if (boardState[3].value === symbol && boardState[4].value === symbol && boardState[5].value === symbol) {
        boardState[3].style.backgroundColor = "green";
        boardState[4].style.backgroundColor = "green";
        boardState[5].style.backgroundColor = "green";
        reloadGame(symbol)

    }
    if (boardState[6].value === symbol && boardState[7].value === symbol && boardState[8].value === symbol) {
        boardState[6].style.backgroundColor = "green";
        boardState[7].style.backgroundColor = "green";
        boardState[8].style.backgroundColor = "green";
        reloadGame(symbol)
    }

    if (boardState[0].value === symbol && boardState[3].value === symbol && boardState[6].value === symbol) {
        boardState[0].style.backgroundColor = "green";
        boardState[3].style.backgroundColor = "green";
        boardState[6].style.backgroundColor = "green";
        reloadGame(symbol)
    }

    if (boardState[1].value === symbol && boardState[4].value === symbol && boardState[7].value === symbol) {
        boardState[1].style.backgroundColor = "green";
        boardState[4].style.backgroundColor = "green";
        boardState[7].style.backgroundColor = "green";
        reloadGame(symbol)
    }

    if (boardState[2].value === symbol && boardState[5].value === symbol && boardState[8].value === symbol) {
        boardState[2].style.backgroundColor = "green";
        boardState[5].style.backgroundColor = "green";
        boardState[8].style.backgroundColor = "green";
        reloadGame(symbol)
    }
    if (boardState[0].value === symbol && boardState[4].value === symbol && boardState[8].value === symbol) {
        boardState[0].style.backgroundColor = "green";
        boardState[4].style.backgroundColor = "green";
        boardState[8].style.backgroundColor = "green";
        reloadGame(symbol)
    }
    if (boardState[2].value === symbol && boardState[4].value === symbol && boardState[6].value === symbol) {
        boardState[2].style.backgroundColor = "green";
        boardState[4].style.backgroundColor = "green";
        boardState[6].style.backgroundColor = "green";
        reloadGame(symbol)
    }
}

const reloadGame = (symbol) => {
    isEnded = true;
    symbol == "x" ? setTimeout(() => (alert("X won!"), window.location.reload()), 30) : setTimeout(() => (alert("O won!"), window.location.reload()), 30);
}

const winnerCheck = () => {
    boardValues = document.getElementsByClassName('tic-tac-toe-button');
    console.log(boardValues)
    boardCheck(boardValues, "x");
    boardCheck(boardValues, "o");
    checkedPositions++;
    if (checkedPositions == 9 && !isEnded) {
        alert("Draw!");
        checkedPositions = 0;
        isEnded = false;
        turn = true;
        window.location.reload();
    }
    // for (let item of boardValues) {
    //     item.value == ""? {}: isDraw = true;

    //     isDraw && !isEnded? alert("Draw!"): {};
    // }
}
