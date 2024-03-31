const random =  (parseInt(Math.random()*100 +1));

const guess = document.querySelector('#guess');
const submit = document.querySelector('#sbt');

submit.addEventListener('click', (e) => {
    e.preventDefault();
    const value = parseInt(guess.value);
    if (value === random) {
        alert('Congratulations! You have guessed the number');
    } else if (value > random) {
        alert('Too high! Try again');
    } else {
        alert('Too low! Try again');
    }
    guess.value = '';



}, false);


