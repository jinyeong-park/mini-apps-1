// - the first move always starts with player X
// - the app detects a win or tie and displays an appropriate message
// - a button resets the game for a new round of gameplay

// A single page app means that once the page loads,
//no user-generated actions on the page may cause the entire page to reload.
console.log('Hello App');

//add a click event listener for each square on the board.
//When a square is clicked, add an X to that square.

/*----- event listeners -----*/
let currentPlayer = "X";
let gameActive = true;
// 3 * 3 board
//let board = [['', '', ''], ['', '', ''], ['', '', '']];
let board = ['', '', '', '', '', '', '', '', ''];
//0, 1, 2, 3, 4, 5, 6, 7, 8

// var player1 = prompt("PlayerX enter your name");
// var player2 = prompt("PlayerO enter your name");


function cellClick(id) {

  //check id when clicking certain cell.
    console.log('id: ' + id);

    console.log('current player :', currentPlayer)
    //change their turn to play the game
    if (currentPlayer === "X") {
      //Change the HTML content of element with id to "X" in the browser
      document.getElementById(id).innerHTML = "X";
      board[id] = "X";
      currentPlayer = "O";
      console.log(board)
    } else {
      document.getElementById(id).innerHTML = "O";
      board[id] = "O";
      currentPlayer = "X";
      console.log(board)
    }
    //Winning
    //if current player has taken the same line of row, column, or digonal =>
    //winner is decided.

    //row
    for (let i = 0 ; i < board.length; i +=3) {
      if (board[i] === "X" && board[i] === board[i+1] && board[i+1] === board[i+2]) document.getElementById('status').innerHTML = `${board[i]} is winner!`;
      if (board[i] === "O" && board[i] === board[i+1] && board[i+1] === board[i+2]) document.getElementById('status').innerHTML = `${board[i]} is winner!`;
    }

    //column
    for (let i = 0; i < 3; i++) {
      if (board[i] === "X" && board[i] === board[i+3] && board[i+3] === board[i+6]) document.getElementById('status').innerHTML = `${board[i]} is winner!`;
      if (board[i] === "O" && board[i] === board[i+3] && board[i+3] === board[i+6]) document.getElementById('status').innerHTML = `${board[i]} is winner!`;
    }

    //diagonal1(major)
    if (board[0] === "X" && board[0] === board[4] && board[4] === board[8]) document.getElementById('status').innerHTML = `${board[0]} is winner!`;
    if (board[0] === "O" && board[0] === board[4] && board[4] === board[8]) document.getElementById('status').innerHTML = `${board[0]} is winner!`;

   //diagonal2(minor)
    if (board[2] === "X" && board[2] === board[4] && board[4] === board[6]) document.getElementById('status').innerHTML = `${board[2]} is winner!`;
    if (board[2] === "O" && board[2] === board[4] && board[4] === board[6]) document.getElementById('status').innerHTML = `${board[0]} is winner!`;

  gameActive = false;
  //Once winner is decided or board is fully occupied, cannot click anymore

}

var reset_game = function () {
  //reset effect
  //remove board in the browser
  for (let i = 0; i < board.length; i++) {
    document.getElementById(i).innerHTML = '';

  }
  //make board itself empty
  board = ['', '', '', '', '', '', '', '', ''];
  // return board;

}


