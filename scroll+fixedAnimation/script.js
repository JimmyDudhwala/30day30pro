const textElement = document.querySelector('.textTimer');

const text = "Welcome to BAG.XI";
let index = 1;
const speed = 200;

const write = () => {

    textElement.innerHTML =text.slice(0,index);
    index++;
    if (index > text.length) {
        index = 1;
    }
    setTimeout(write, speed);
}

write();

const logo =document.querySelector('.logo');

window.addEventListener('scroll',() =>{
    if(window.scrollY > 0){
        logo.classList.add('apply');
    }
    else{
        logo.classList.remove('apply');
    }
})

const bagepacks = document.querySelector('.bagepacks');
const packsblock = document.querySelector('.Packsblock');

bagepacks.addEventListener('mouseenter',(e)=>{
    console.log(e);
    packsblock.classList.add('drop');
})

packsblock.addEventListener('mouseleave',()=>{
    packsblock.classList.remove('drop');
})

const bags = document.querySelector('.bages');


bags.addEventListener('mouseenter',(e)=>{
    console.log(e);
    packsblock.classList.add('drop');
})

packsblock.addEventListener('mouseleave',()=>{
    packsblock.classList.remove('drop');
})

const luggage = document.querySelector('.luggage');

luggage.addEventListener('mouseenter',(e)=>{
    console.log(e);
    packsblock.classList.add('drop');
})

packsblock.addEventListener('mouseleave',()=>{
    packsblock.classList.remove('drop');
})


const search = document.querySelector('.search');
const input = document.createElement('input');


// search.addEventListener('mouseenter',createInput);
// search.addEventListener('mouseleave',destroyInput);

const box1 = document.querySelector('.box1');
const box2 = document.querySelector('.box2');

window.addEventListener('scroll', function() {
    const box1 = document.querySelector('.box1');

    if (window.scrollY > window.innerHeight / 12) {
       box1.classList.add('show');
    } else {
        box1.classList.remove('show');
    }
});

window.addEventListener('scroll', function() {
    const box2 = document.querySelector('.box2');

    if (window.scrollY > (window.innerHeight) / 12) {
       box2.classList.add('show');
    } else {
        box2.classList.remove('show');
    }
}); 

window.addEventListener('scroll', function() {
    const box3 = document.querySelector('.box3');

    if (window.scrollY > 3*(window.innerHeight) / 6) {
       box3.classList.add('show');
    } else {
        box3.classList.remove('show');
    }
});

window.addEventListener('scroll', function() {
    const box4 = document.querySelector('.box4');

    if (window.scrollY > 3*(window.innerHeight) / 6) {
       box4.classList.add('show');
    } else {
        box4.classList.remove('show');
    } 
});

const drag = document.querySelector('.drag');

let press = false;
let startX = 0;

drag.addEventListener('mousedown', (e) => {
    press = true;
    startX = e.clientX;
    console.log(startX);
    drag.style.cursor = 'grabbing';
});

drag.addEventListener('mouseup', (e) => {
     press = false;
     drag.style.cursor = 'grab';
});

drag.addEventListener('mouseleave', (e) => {
     press = false;
});

drag.addEventListener('mousemove', (e) => {
     if (!press) {
            return;
     }
     e.preventDefault();
     drag.scrollLeft += startX - e.clientX;
     
});

