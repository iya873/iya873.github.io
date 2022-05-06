// let score = 0;

// // document.querySelector(".score").innerText = score;

// function increase() {
//   score = score + 1;
//   document.getElementsByClassName(".score").innerText = score;
// }

// function decrease() {
//   score = score - 1;
//   document.getElementsByClassName(".score").innerText = score;
// }

// let updateScore = () => {
//   let correctAnswer = true;
//   if (correctAnswer = true; score + cardValue);

//   cardValue = () => {
//     let value =
//   }
// }

// make button show game on click

let showGame = () => {
  // get the button
  var button = document.getElementById("start");
  // get the gameboard
  var game = document.getElementById("game");
  game.style.display = "block";
  button.addEventListener("click", showGame);

}
var gameStarted = true;
// var user1 = 1;
let currentPlayer = document.getElementById('score1');

if (gameStarted === true) {
  currentPlayer.style.background = 'green';
};


  var qTwos = {
    question: "Souled Out is the name of whose album?",
    points: 200,
    answer: "Jhene Aiko"

};

document.querySelector('.cards').addEventListener('click', showQuestion)

function showQuestion(e) {
  // console.log(e.target.tagName);
  if (e.target.tagName === 'TD') {
    let guess = prompt(qTwos.question);
    let show = document.getElementsByTagName('td');
    let catgeories = document.getElementsByTagName('thead');
    checkAnswer(guess);
}
}
// show.addEventListener('click', message)
function checkAnswer(guess) {
  let answeredGuess = true;
  if (guess === qTwos.answer.toLowerCase()) {
    alert('You got it right!');
    updateScore(true);
  } else {
    alert('You got it wrong!');
    updateScore(false);
  }
}

var scores = document.getElementsByClassName('scores');

scores.addEventListener('click', 'updateScore');

function updateScore(isCorrect) {
  if (isCorrect === true) {
    scores.target.innerHTML = parseInt(scores[0].innerHTML) + qTwos.points
  } else {
    scores.target.innerHTML = parseInt(scores[0].innerHtml) - qTwos.points
  }
}
let cardAnswered = true

function nextTurn() {
  if (cardAnswered === true) {
    let nextPlayer = document.getElementById('score2').style.background = 'green';
    currentPlayer.style.background = 'yellow';
  }
}