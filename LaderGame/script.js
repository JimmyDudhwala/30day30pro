const ball = document.querySelector('.ball');
const container = document.querySelector('.container');

document.addEventListener('keydown',(e)=>{
    
    console.log(e);
    if(e.key === 'ArrowLeft'){
        let left  = parseInt(window.getComputedStyle(ball).left);
        if(left >= 2){
            
            ball.style.left = (left - 5) + "px";
            console.log(ball.style.left);
        }
    }

    if(e.key === 'ArrowRight'){
        let left  = parseInt(window.getComputedStyle(ball).left);
 
        if(left <= 446){
            ball.style.left = (left + 5) + "px";

        }
    }

})

const block = document.createElement('div');
const hole = document.createElement('div');

hole.setAttribute("class", "hole");
block.setAttribute("class","block");

container.appendChild(block);
container.appendChild(hole);


const randomLeft = Math.floor(Math.random() * (789 - 344 + 1)) + 344;
hole.style.left = randomLeft + 'px';