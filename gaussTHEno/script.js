const random = parseInt(Math.random()*100 + 1);

console.log(random);

const submit = document.querySelector('#btn');
const input = document.getElementById('pre');
const advice = document.querySelector('#advice');
const again = document.querySelector('.try')

submit.addEventListener("click", (e) => {
    e.preventDefault();
    const guess = input.value;
    console.log(guess);
    input.value='';
    if(random == guess){
        advice.innerHTML="<h3>you are right</h3>"
        submit.remove();
        again.remove(); 
    }

    else{
        advice.innerHTML="<h3>you are wrong</h3>"
        retry();
        again.addEventListener('click', () => {
            advice.remove();
            again.remove();     
        })
    }
})

function retry(){

    again.innerHTML = "<h3>DO IT AGAIN</h3>"
    again.classList.add('again');  

}








