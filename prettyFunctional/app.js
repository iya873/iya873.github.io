var play = document.querySelector('.play');
var rules = document.querySelector('.rulesBox');
var exit = rules.querySelector('#exit');
var cont = rules.querySelector('#continue');
// var startQuiz = document.querySelector('#playGame');
// var goBack = document.querySelector('#return');

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

// var westCat = document.querySelector('#cat1');
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
            if (westQuiz[3]== westAns[3]) {
                alert('You won!')
            }
            alert(correct);
            // var userCorrect = guess.value;
            // var numCorrect = 0;
            // function winner() {
                
            // for (var a = 0; a <= westAns[a]; a++);
            // numCorrect++;
            //     if (westQuiz[3] == true) {
            //         alert('You got them all right, you win!')
            //     }
            // }
            // winner();
            //}
            //}
        }
    }

}


// function winner() {
//     var guess = prompt(westQuiz[a]);

//     var userCorrect = '';
//     var numCorrect = 0;

//     for (var a = 0; a < westQuiz.length; a++){
//         userCorrect = (westAns[a].prompt(westQuiz).value);

//         if (userCorrect == guess) {
//             numCorrect++;
//             if (numCorrect == 4) {
//                 alert('You are the winner!')
//             }
//         }
//     } 
// }

function loser() {
    if (incorrect = true) {
        alert('You are the loser!')
    }
}

// function checkAns() {
//     let userCorrect = guess.value;
//     let numCorrect = 0;
//     if (userCorrect == true) {
//         alert(correct);
//         numCorrect++;
//         if (numCorrect == 4) {
//             winner
//         }
        
//     }
// }