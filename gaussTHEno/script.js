const random =  (parseInt(Math.random()*100 +1));

const guess = document.querySelector('#guess');
const submit = document.querySelector('#sbt');

submit.addEventListener('click', (e) => {
    e.preventDefault();
    const userGuess = parseInt(guess.value);


});