const categories = ['West Coast', 'Duurty South', 'Pop Culture', 'East Coast'];
class Question{
    constructor(question, answer, points) {
        this.question = question;
        this.answer = answer;
        this.points = points;
    }
}

let q0 = document.getElementById('qt0');
let q1 = document.getElementById('qt1');
let q2 = document.getElementById('qt2');
let q3 = document.getElementById('qt3');
let q4 = document.getElementById('qt4');
let q5 = document.getElementById('qt5');
let q6 = document.getElementById('qt6');
let q7 = document.getElementById('qt7');
let q8 = document.getElementById('qt8');
let q9 = document.getElementById('qt9');
let q10 = document.getElementById('qt10');
let q11 = document.getElementById('qt11');
let q12 = document.getElementById('qt12');
let q13 = document.getElementById('qt13');
let q14 = document.getElementById('qt14');
let q15 = document.getElementById('qt15');



q0 = new Question('Souled Out is the name of whose debut album?','Jhene Aiko', 200);
q1 = new Question('This self-titled album had its own "superpower"', 'BEYONCE', 200);
q2 = new Question("This album's second and final single's title is a sarcastic way of apologizing", 'Tell Me You Love Me', 200);
q3 = new Question("This album title has something in common with the artist's child",'The Blueprint', 200 )
q4 = new Question("What rapper's birth name is actually O'Shea Jackson?", 'Ice Cube', 400);
q5 = new Question('Who is Dwayne Carter Jr?', 'Lil Wayne', 400);
q6 = new Question('Who is Peter Hernandez?', 'Bruno Mars', 400);
q7 = new Question('Belcalis Almanzar sounds like a spell, who is it?', 'Cardi B', 400);
q8 = new Question('This song was an insult and a popular dance in the mid aughts', "You're a Jerk/n New Boys", 600);
q9 = new Question('This song took over TikTok for the summer and got a spicy remix with a queen', 'Savage/n Megan Thee Stallion', 600);
q10 = new Question('What song is the #1 streamed on Spotify', 'Shape of You/n Ed Sheeran', 600);
q11 = new Question('This song has a classic beat that has had many spins on the origin sample throughout the years', 'Juicy/n Biggie', 600);
q12 = new Question('Finish the lyrics', 'Lyrics', 800);
q13 = new Question('Finish the lyrics', 'Lyrics', 800);
q14 = new Question('Finish the lyrics', 'Lyrics', 800);
q15 = new Question('Finish the lyrics', 'Lyrics', 800);


// q0.addEventListener('click', prompt(q0.question));
// q1.addEventListener('click', prompt(q1.question));
// q2.addEventListener('click', prompt(q2.question));
// q3.addEventListener('click', prompt(q3.question));
// q4.addEventListener('click', prompt(q4.question));
// q5.addEventListener('click', prompt(q5.question));
// q6.addEventListener('click', prompt(q6.question));
// q7.addEventListener('click', prompt(q7.question));
// q8.addEventListener('click', prompt(q8.question));
// q9.addEventListener('click', prompt(q9.question));
// q10.addEventListener('click', prompt(q10.question));
// q11.addEventListener('click', prompt(q11.question));
// q12.addEventListener('click', prompt(q12.question));
// q13.addEventListener('click', prompt(q13.question));
// q14.addEventListener('click', prompt(q14.question));
// q15.addEventListener('click', prompt(q15.question));

let guess = prompt(Question, '');

showQ1 = (event) => {
        prompt(q0.question);
    if (guess === q0.answer) {
        alert('You got it right!');
        scoreBox1.style.display = 'yellow';
        scoreBox2.style.display = 'green';
    }else {
        alert('You got it wrong. You lose!');
    }
};

showQ2 = (event) => {
        prompt(q1.question);
    if (guess === [q1.answer.toLowerCase]) {
        alert('You got it right!');
        scoreBox1.style.display = 'yellow';
        scoreBox2.style.display = 'green';
    }else {
        alert('You got it wrong. You lose!');

    }
};

showQ3 = (event) => {
        prompt(q2.question);
    if (guess === [q2.answer.toLowerCase]) {
        alert('You got it right!');
        scoreBox1.style.display = 'yellow';
        scoreBox2.style.display = 'green';
    }else {
        alert('You got it wrong. You lose!');

    }
};
showQ4 = (event) => {
        prompt(q3.question);
    if (guess === [q3.answer.toLowerCase]) {
        alert('You got it right!');
        scoreBox1.style.display = 'yellow';
        scoreBox2.style.display = 'green';
    }else {
        alert('You got it wrong. You lose!');

    }
};
showQ5 = (event) => {
        prompt(q4.question);
    if (guess === [q4.answer.toLowerCase]) {
        alert('You got it right!');
        scoreBox1.style.display = 'yellow';
        scoreBox2.style.display = 'green';
    }else {
        alert('You got it wrong. You lose!');

    }
};
showQ6 = (event) => {
        prompt(q5.question);
    if (guess === [q5.answer.toLowerCase]) {
        alert('You got it right!');
        scoreBox1.style.display = 'yellow';
        scoreBox2.style.display = 'green';
    }else {
        alert('You got it wrong. You lose!');

    }
};
showQ7 = (event) => {
        prompt(q6.question);
    if (guess === [q6.answer.toLowerCase]) {
        alert('You got it right!');
        scoreBox1.style.display = 'yellow';
        scoreBox2.style.display = 'green';
    }else {
        alert('You got it wrong. You lose!');

    }
};
showQ8 = (event) => {
        prompt(q7.question);
    if (guess === [q7.answer.toLowerCase]) {
        alert('You got it right!');
        scoreBox1.style.display = 'yellow';
        scoreBox2.style.display = 'green';
    }else {
        alert('You got it wrong. You lose!');

    }
};
showQ9 = (event) => {
        prompt(q8.question);
    if (guess === [q8.answer.toLowerCase]) {
        alert('You got it right!');
        scoreBox1.style.display = 'yellow';
        scoreBox2.style.display = 'green';
    }else {
        alert('You got it wrong. You lose!');

    }
};
showQ10 = (event) => {
        prompt(q9.question);
    if (guess === [q9.answer.toLowerCase]) {
        alert('You got it right!');
        scoreBox1.style.display = 'yellow';
        scoreBox2.style.display = 'green';
    }else {
        alert('You got it wrong. You lose!');

    }
};
showQ11 = (event) => {
        prompt(q10.question);
    if (guess === [q10.answer.toLowerCase]) {
        alert('You got it right!');
        scoreBox1.style.display = 'yellow';
        scoreBox2.style.display = 'green';
    }else {
        alert('You got it wrong. You lose!');

    }
};
showQ12 = (event) => {
        prompt(q11.question);
    if (guess === [q11.answer.toLowerCase]) {
        alert('You got it right!');
        scoreBox1.style.display = 'yellow';
        scoreBox2.style.display = 'green';
    }else {
        alert('You got it wrong. You lose!');

    }
};
showQ13 = (event) => {
        prompt(q12.question);
    if (guess === [q12.answer.toLowerCase]) {
        alert('You got it right!');
        scoreBox1.style.display = 'yellow';
        scoreBox2.style.display = 'green';
    }else {
        alert('You got it wrong. You lose!');

    }
};
showQ14 = (event) => {
        prompt(q13.question);
    if (guess === [q13.answer.toLowerCase]) {
        alert('You got it right!');
        scoreBox1.style.display = 'yellow';
        scoreBox2.style.display = 'green';
    }else {
        alert('You got it wrong. You lose!');

    }
};
showQ15 = (event) => {
        prompt(q14.question);
    if (guess === [q14.answer.toLowerCase]) {
        alert('You got it right!');
        scoreBox1.style.display = 'yellow';
        scoreBox2.style.display = 'green';
    }else {
        alert('You got it wrong. You lose!');

    }
};
showQ16 = (event) => {
        prompt(q15.question);
    if (guess === [q15.answer.toLowerCase]) {
        alert('You got it right!');
        scoreBox1.style.display = 'yellow';
        scoreBox2.style.display = 'green';
    }else {
        alert('You got it wrong. You lose!');

    }
};













































































































