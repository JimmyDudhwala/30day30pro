const random = parseInt(Math.random()*100 + 1);

console.log(random);

const submit = document.querySelector('#btn');
const input = document.getElementById('pre');
const advice = document.querySelector('#advice');



submit.addEventListener("click", (e) => {
    e.preventDefault();
    const guess = input.value;
    console.log(guess);
    if(random == guess){
        advice.innerHTML="<h3>you are right</h3>"
        submit.remove();

    }

    else{
        advice.innerHTML="<h3>you are wrong</h3>"
        submit.remove();
    }

})



