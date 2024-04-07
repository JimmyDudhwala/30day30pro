const box1 = document.querySelector('.box1');
const box2 = document.querySelector('.box2');
console.log(box1);
console.log(window.scrollY);
window.addEventListener('scroll', function() {
    const box1 = document.querySelector('.box1');

    if (window.scrollY > window.innerHeight / 2) {
       box1.classList.add('show');
    } else {
        box1.classList.remove('show');
    }
});

window.addEventListener('scroll', function() {
    const box2 = document.querySelector('.box2');

    if (window.scrollY > (window.innerHeight) / 2) {
       box2.classList.add('show');
    } else {
        box2.classList.remove('show');
    }
});

window.addEventListener('scroll', function() {
    const box3 = document.querySelector('.box3');

    if (window.scrollY > 3*(window.innerHeight) / 4) {
       box3.classList.add('show');
    } else {
        box3.classList.remove('show');
    }
});

window.addEventListener('scroll', function() {
    const box4 = document.querySelector('.box4');

    if (window.scrollY > 3*(window.innerHeight) / 4) {
       box4.classList.add('show');
    } else {
        box4.classList.remove('show');
    } 
});
