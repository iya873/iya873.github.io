//global variables
var board = document.getElementById('game');
var reset = document.querySelector('#reset');
var button = document.getElementById('start');
let scoreBox1 = document.getElementById('score1');
let scoreBox2 = document.getElementById('score2');
let ytText = document.getElementsByClassName('yourTurn');
let clickCards = document.getElementsByClassName('cards');
var team1 = 0;
var team2 = 0;
//event to show game clicking on start btn
//event listener to hide board on screen load
window.addEventListener('load', hideBoard());

function hideBoard() {
  board.style.display = 'none';
  reset.style.display = 'none';
}
//onclick in html
function showGame() {
  board.style.display = 'block';
  alert('Read the rules !');
  scoreBox1.style.background = 'green';
  ytText[1].style.display = 'none';
  button.style.display = 'none';
  reset.style.display = 'block';

  for (i = 0; i<4; i++){ 
    document.getElementById('cat'+i).innerHTML = categories[i];
  }
}

// var gameStarted = true;
// // var user1 = 1;
// let currentPlayer = document.getElementById('score1');

// if (gameStarted === true) {
//   currentPlayer.style.background = 'green';
// };


//   var qTwos = {
//     question: "Souled Out is the name of whose album?",
//     points: 200,
//     answer: "Jhene Aiko"

// };

// document.querySelector('.cards').addEventListener('click', showQuestion);


