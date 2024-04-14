
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ball = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  radius: 20,
  color: '#0077ff',
  velocityX: 0,
  velocityY: 0,
  gravity: 0.2,
  friction: 0.98,
  speed: 5,
};


document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);

let rightPressed = false;
let leftPressed = false;
let upPressed = false;
let downPressed = false;

function keyDownHandler(e) {
  if (e.key === 'Right' || e.key === 'ArrowRight') {
    rightPressed = true;
  } else if (e.key === 'Left' || e.key === 'ArrowLeft') {
    leftPressed = true;
  } else if (e.key === 'Up' || e.key === 'ArrowUp') {
    upPressed = true;
  } else if (e.key === 'Down' || e.key === 'ArrowDown') {
    downPressed = true;
  }
}

function keyUpHandler(e) {
  if (e.key === 'Right' || e.key === 'ArrowRight') {
    rightPressed = false;
  } else if (e.key === 'Left' || e.key === 'ArrowLeft') {
    leftPressed = false;
  } else if (e.key === 'Up' || e.key === 'ArrowUp') {
    upPressed = false;
  } else if (e.key === 'Down' || e.key === 'ArrowDown') {
    downPressed = false;
  }
}


function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2, false);
  ctx.fillStyle = ball.color;
  ctx.fill();
  ctx.closePath();
}


function update() {

  ball.velocityY += ball.gravity;
  

  if (rightPressed) {
    ball.velocityX = ball.speed;
  } else if (leftPressed) {
    ball.velocityX = -ball.speed;
  } else {
    ball.velocityX = 0;
  }
  
  if (upPressed && ball.y >= canvas.height - ball.radius) {
    ball.velocityY = -10;
  }
  

  ball.x += ball.velocityX;
  ball.y += ball.velocityY;
  
  ball.velocityX *= ball.friction;
  ball.velocityY *= ball.friction;
  

  if (ball.x + ball.radius > canvas.width) {
    ball.x = canvas.width - ball.radius;
    ball.velocityX = -ball.velocityX;
  } else if (ball.x - ball.radius < 0) {
    ball.x = ball.radius;
    ball.velocityX = -ball.velocityX;
  }
  if (ball.y + ball.radius > canvas.height) {
    ball.y = canvas.height - ball.radius;
    ball.velocityY = -ball.velocityY ;
  } else if (ball.y - ball.radius < 0) {
    ball.y = ball.radius;
    ball.velocityY = -ball.velocityY ;
  }
}

function animate() {
  requestAnimationFrame(animate);
  draw();
  update();
}


animate();

