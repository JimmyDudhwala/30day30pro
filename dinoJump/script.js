const dino = document.querySelector(".dino");

window.addEventListener('keyup', (event) => {
    if (event.key === 'ArrowUp') {
        dino.classList.add('jump');
        setTimeout(()=>{
            dino.classList.remove('jump')
        },500)
    }
    
});

const block = document.querySelector(".block");


setInterval(()=>{
    
const dinotop = parseInt(window.getComputedStyle(dino).top);
const blockleft = parseInt(window.getComputedStyle(block).left);


console.log(blockleft);

    if( blockleft < 35 && dinotop >= 415 ){
        alert("game over");
       }

},1)

