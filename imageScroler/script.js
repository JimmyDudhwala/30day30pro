const images = document.querySelectorAll(".image");
const rightbtn = document.querySelector(".right");
const leftbtn = document.querySelector(".left");

console.log(images);

var index = 0;

const run = () => {
    index++;
    if(index > images.length-1) index = 0;
    setActive();
  };
  
  const resetInterval = () => {
    clearInterval(interval);
    interval = setInterval(run, 2000);
  };
  
  let interval = setInterval(run, 2000);

const setActive = () => {
  images.forEach((image) => {
    image.classList.remove("current");
  });

  images[index].classList.add("current");
};

rightbtn.addEventListener('click',()=>{

    index++;
    if(index > images.length-1) index = 0;
    setActive();
    resetInterval();
})
leftbtn.addEventListener('click',()=>{
    index--;
    if (index < 0) index = images.length - 1;
    setActive();
    resetInterval();
})