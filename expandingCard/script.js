
const panel = document.querySelectorAll('.panel');
const body = document.querySelector('body');

console.log(body);

console.log(panel);

const removeActiveClasses = () => {
    panel.forEach((panel) => {
      panel.classList.remove("select");
    });
  };

panel.forEach((panel) => {
    panel.classList.remove('select');
    panel.addEventListener("click", (e) => {
        if (e.target.style.backgroundImage) {
            removeActiveClasses();
            console.log(e.target.style.backgroundImage);
            body.style.backgroundImage = e.target.style.backgroundImage;
            panel.classList.add('select'); 

            
        } 
    });
});
