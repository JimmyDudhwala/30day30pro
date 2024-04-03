function setdate(){

const now = new Date();
const sec = now.getSeconds();
const secDegree = ((sec/60)*360) + 90;
const secHand = document.querySelector('.sec');
secHand.style.transform = `rotate(${secDegree}deg)`;
console.log(sec);
const s = document.querySelector('.s');
s.innerHTML=`: ${sec}`;

const min = now.getMinutes();
const minDegree= ((min/60)*360) + 90;
const minHand = document.querySelector('.min');
minHand.style.transform = `rotate(${minDegree}deg)`;
console.log(min);
const m = document.querySelector('.m');
m.innerHTML= `: ${min}`;

const hour = now.getHours();
const hourDegree = ((hour/12)*360) + 90;
const hourHand = document.querySelector('.hour');
hourHand.style.transform = `rotate(${hourDegree}deg)`;
console.log(hour);
const h = document.querySelector('.h');
h.innerHTML = `${hour}`;
}


setInterval(setdate, 1000);