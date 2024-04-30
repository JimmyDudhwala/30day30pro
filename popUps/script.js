const btn = document.querySelector('button');
const main = document.querySelector('.main');
const left = document.querySelector('.left');
const body = document.querySelector('body');

let count = 0

function popup(){
    
    console.log(`hello`);
    
    const container = document.createElement(`div`);
    container.setAttribute("class","container");
    container.setAttribute("id",`con${count}`);
    left.appendChild(container);
    
    alarm = document.createElement('div');
    
    alarm.setAttribute("class","alarm");
    alarm.setAttribute("id",`alram${count}`);
    container.appendChild(alarm);
    
    const cancel = document.createElement('div');
    cancel.setAttribute("id",`cancel${count}`);
    cancel.setAttribute("class","cancel");
    container.appendChild(cancel);

    const alarmId = document.querySelector(`#alram${count}`);
    const cancelId = document.querySelector(`#cancel${count}`);

    alarmId.addEventListener("click", () => {
        container.classList.add("vibrate");
    
        setTimeout(() => {
            container.classList.remove("vibrate");
        }, 500);
    });
     
    cancelId.addEventListener("click", () => {
    container.style.animation = "fadeOut 0.5s forwards";

    setTimeout(() => {
        container.remove();
    }, 500); 
});


count++
}

btn.addEventListener("click",popup);
