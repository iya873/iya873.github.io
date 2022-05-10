var play = document.querySelector('.play');
var rules = document.querySelector('.rulesBox');
var exit = rules.querySelector('#exit');
var cont = rules.querySelector('#continue');
var startQuiz = document.querySelector('#playGame');
var goBack = document.querySelector('#return');

function hideAll() {
    startQuiz.style.display = 'none';
    goBack.style.display = 'none';
}

play.addEventListener('click', showRules = () => {
    play.style.display = 'none';
    rules.style.display = 'block';
})

exit.addEventListener('click', backToStart = () => {
    rules.style.display = 'none';
    play.style.display = 'block';
})

function startGame(){
    rules.style.display = 'none';
    alert('Choose a category!');
    move();
}
function move() {
    let moveCategories = document.getElementById('categories').style.animation = 'moveCats 2s 1 forwards';
    moveCategories;
}

var westCat = document.querySelector('#cat1');
var correct = 'You got it right! Next question!';
var incorrect = 'You got it wrong! You lose!';

var questCnt = 0;


    
    function showWest() {
    for (let i = 0; i <= 3; i++) {
        let guess = prompt(westQuiz[i]);
        let answer = westAns[i];
        if (guess !== answer) {
            let gameOver = true;
            if (gameOver == true) {
                loser();
                play.style.display = 'block';
                let moveCategories = document.getElementById('categories').style.animation = 'moveCats 2s reverse';
                break;
            }
        }
        else {
            alert(correct);
            winner();
        }
    }
}

function winner() {
    if (correct == true) {
        alert('You are the winner!')
    }
}

function loser() {
    if (incorrect = true) {
        alert('You are the loser!')
    }
}