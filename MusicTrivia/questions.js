const categories = ['West Coast', 'Duurty South', 'Pop Culture', 'East Coast'];
class Question{
    constructor(question, answer, points) {
        this.question = question;
        this.answer = answer;
        this.points = points;
    }
}

let q0 = new Question('Souled Out is the name of whose debut album?','Jhene Aiko', 200);
let q1 = new Question('This self-titled album had its own "superpower"', 'BEYONCE', 200);
let q2 = new Question("This album's second and final single's title is a sarcastic way of apologizing", 'Tell Me You Love Me', 200);
let q3 = new Question("This album title has something in common with the artist's child",'The Blueprint', 200 )
let q4 = new Question("What rapper's birth name is actually O'Shea Jackson?", 'Ice Cube', 400);
let q5 = new Question('Who is Dwayne Carter Jr?', 'Lil Wayne', 400);
let q6 = new Question('Who is Peter Hernandez?', 'Bruno Mars', 400);
let q7 = new Question('Belcalis Almanzar sounds like a spell, who is it?', 'Cardi B', 400);
let q8 = new Question('This song was an insult and a popular dance in the mid aughts', "You're a Jerk/n New Boys", 600);
let q9 = new Question('This song took over TikTok for the summer and got a spicy remix with a queen', 'Savage/n Megan Thee Stallion', 600);
let q10 = new Question('What song is the #1 streamed on Spotify', 'Shape of You/n Ed Sheeran', 600);
let q11 = new Question('This song has a classic beat that has had many spins on the origin sample throughout the years', 'Juicy/n Biggie', 600);
let q12 = new Question('Finish the lyrics', 'Lyrics', 800);
let q13 = new Question('Finish the lyrics', 'Lyrics', 800);
let q14 = new Question('Finish the lyrics', 'Lyrics', 800);
let q15 = new Question('Finish the lyrics', 'Lyrics', 800);

document.querySelector('.cards').addEventListener('click', showQuestion);

switch (showQuestion())