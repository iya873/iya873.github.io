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
}


var westCat = document.querySelector('#cat1');
var correct = 'You got it right! Next question!';
var incorrect = 'You got it wrong! You lose!';

var questCnt = 0;


function showWest(){
    for (let i = 0; i <= 3; i++) {
        prompt(westQuiz[i]).innerHTML;   
        checkAns();
    }
}

function checkAns() {
    for (let a = 0; a <= 3; a++)
    if (westAns[a] == westQuiz[i]) {
        alert(correct);
    } else {
        alert(incorrect);
    }
}