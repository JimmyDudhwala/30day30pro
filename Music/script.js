


window.addEventListener("keydown",(e) => {

    const btn = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    const audios = document.querySelector(`audio[data-key="${e.keyCode}"]`);

    if(!audios) return;
    audios.currentTime=0;
    audios.play();
    console.log(btn);
    btn.classList.add('playing');
    setTimeout(()=> btn.classList.remove('playing'), 2000)
    
} )

const click = document.querySelectorAll(`button`);
const sound = document.querySelectorAll(`audio`);
console.log(click);
console.log(sound);

click.forEach((button) => {
    button.addEventListener('click', (e) => {
        const key = e.target.getAttribute('data-key');
        if (key === '81') {
            console.log(key);
            const audios = document.querySelector(`audio[data-key="${key}"]`);
            if (!audios) return;
       
            audios.currentTime = 0;
            audios.play();
            e.target.classList.add('playing');
            setTimeout(()=>  e.target.classList.remove('playing'), 2000)
        }
        if (key === '87') {
            console.log(key);
            const audios = document.querySelector(`audio[data-key="${key}"]`);
            if (!audios) return;
       
            audios.currentTime = 0;
            audios.play();
            e.target.classList.add('playing');
            setTimeout(()=> e.target.classList.remove('playing'), 2000)
        }
        if (key === '69') {
            console.log(key);
            const audios = document.querySelector(`audio[data-key="${key}"]`);
            if (!audios) return;
       
            audios.currentTime = 0;
            audios.play();
            e.target.classList.add('playing');
            setTimeout(()=>  e.target.classList.remove('playing'), 2000)
        }
        if (key === '65') {
            console.log(key);
            const audios = document.querySelector(`audio[data-key="${key}"]`);
            if (!audios) return;
       
            audios.currentTime = 0;
            audios.play();
            e.target.classList.add('playing');
            setTimeout(()=>  e.target.classList.remove('playing'), 2000)
        }
        if (key === '83') {
            console.log(key);
            const audios = document.querySelector(`audio[data-key="${key}"]`);
            if (!audios) return;
       
            audios.currentTime = 0;
            audios.play();
            e.target.classList.add('playing');
            setTimeout(()=>  e.target.classList.remove('playing'), 2000)
        }
        if (key === '68') {
            console.log(key);
            const audios = document.querySelector(`audio[data-key="${key}"]`);
            if (!audios) return;
       
            audios.currentTime = 0;
            audios.play();
            e.target.classList.add('playing');
            setTimeout(()=>  e.target.classList.remove('playing'), 2000)
        }
   
    })
});
