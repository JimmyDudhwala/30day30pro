const playArea = document.querySelector('.container');  
const scoreEle = document.querySelector('.score');
const highEle = document.querySelector('.high-score');
const speedElements = document.querySelectorAll('.speed');
let speed = 200;
const gameOver = false;
let id ;
const gameHandle = () =>{
 clearInterval(id);  
 alert("game over.. press ohk to restart");
 location.reload(); 
}

let highScore = localStorage.getItem('.high-score') || 0;

let score = 0;

let foodX;
let foodY;

let snakeX = 5;
let snakeY = 10;

let snakeBody=[];

let velocityX = 0;
let velocityY = 0;

const changeFoodPosition = () => {
    foodX = Math.floor(Math.random()*30) +1;
    foodY = Math.floor(Math.random()*30) +1;
}

const changeDirection = (e) =>{

    e.preventDefault();
    
    if(e.key === "ArrowUp" && velocityY != 1){
        velocityX = 0;
        velocityY = -1;
    }
    if(e.key === "ArrowDown" && velocityY != -1){
        velocityX = 0;
        velocityY = 1;
    }
    if(e.key === "ArrowLeft" && velocityX != 1){
        velocityX = -1;
        velocityY = 0;
    }
    if(e.key === "ArrowRight" && velocityX != -1){
        velocityX = 1;
        velocityY = 0;
    }

    initGame();
}

const initGame = () => {

    if(gameOver) {
        gameHandle();
    }


    let htmlmarkup = `<div class="food" style="grid-area:${foodY}/${foodX}">
    </div>`

    if(snakeX === foodX && snakeY === foodY){
        changeFoodPosition();
        snakeBody.push([foodX,foodY]);
        score++;
        scoreEle.innerHTML = `score &nbsp&nbsp ${score}`;
        highScore = score >= highScore ? score : highScore;
        localStorage.setItem('.high-score', highScore);
        highEle.innerHTML = `High Score &nbsp&nbsp ${highScore}`;

       
    }
    for(let i = snakeBody.length-1; i > 0 ; i--){
        snakeBody[i] = snakeBody[i -1];
    }

    if(snakeX < 0 || snakeY > 30 || snakeX > 30 || snakeY < 0){
        gameHandle();
    }

    snakeBody[0] = [snakeX, snakeY]
    
    snakeX += velocityX;
    snakeY += velocityY;

    for(let i = 0; i < snakeBody.length; i++){
    htmlmarkup +=`<div class="snake" style="grid-area:${snakeBody[i][1]}/${snakeBody[i][0]}"></div>`

           if(i !== 0 && snakeBody[0][1] === snakeBody[i][1] && snakeBody[0][0] === snakeBody[i][0]){
            gameHandle();
           }

    };

    playArea.innerHTML = htmlmarkup;

    console.log(snakeX, snakeY)

}

for(let i = 0; i < speedElements.length; i++){
    speedElements[i].addEventListener("change", (e) => {

        const rev = 1010 - e.target.value
        id = setInterval(initGame, rev);
        
    });
}


changeFoodPosition();
initGame();

document.addEventListener("keydown",changeDirection);
