const ball = document.querySelector('.ball');
const container = document.querySelector('.container');
let cnt = 0;
var crtblk = [];

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

setInterval(()=>{
    
    var ballTop = parseFloat(document.getComputedStyle(ball).top);
    var ballLeft = parseFloat(document.getComputedStyle(ball).left);

    var drop = 0;

    if(ballTop <= 0){
        alert("game overk")
    }
    var nextBlock = document.querySelector("#block"+(cnt-1));
    var nextHole = document.querySelector("#hole"+(cnt-1));
    
    console.log(nextBlock);
    
    if(cnt>0){
        var nextBlockTop = parseInt(getComputedStyle(nextBlock).top);
        var nextHoleTop = parseInt(getComputedStyle(nextHole).top);
    }
  
const hole = document.createElement('div');
const block = document.createElement('div');

hole.setAttribute("class", "hole");
block.setAttribute("class","block");

hole.style.top = nextHoleTop + 100 + "px";
block.style.top = nextBlockTop + 100 + "px";

console.log(nextBlockTop);

hole.setAttribute("id", "hole"+(cnt));
block.setAttribute("id","block"+(cnt));

container.appendChild(block);
container.appendChild(hole);

const blockWidth = parseInt(window.getComputedStyle(block).width);
const holeWidth = parseInt(window.getComputedStyle(hole).width);


const randomLeft = Math.floor(Math.random() * (blockWidth - holeWidth + 1));


hole.style.left = randomLeft + 'px';

cnt++;
   
crtblk.push(cnt-1);

for(var i =0; i <crtblk.length ; i++){
    let crt = crtblk[i];
    let iblock = document.querySelector("#block" + crt);
    let ihole = document.querySelector("#hole" + crt);
    let iblockTop = parseFloat(window.getComputedStyle(iblock).top);
    let iholeTop = parseFloat(window.getComputedStyle(ihole).top);
    iblock.style.top = iblockTop - 5 + "px";
    ihole.style.top = iholeTop - 5 + "px";
    if(iblockTop < -20){
        crtblk.shift();
        iblock.remove();
        ihole.remove();
    }
    if(iblockTop-20<ballTop &&  iblockTop > ballTop){
     drop++;
     if(iholeLeft<= ballLeft && iholeleft + 20 >= ballLeft ){
        drop =0 ;
     }   
    }
}
if(drop === 0){
    if(ballTop < 670){

        ball.style.top =ballTop + 2 + "px";
    }
}
    else{
ballTop.style.top= ballTop + 0.5 + "px";
    }


},1)