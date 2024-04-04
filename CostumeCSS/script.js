
const spacing = document.getElementsByClassName('space');
const img = document.querySelector('img').style;
console.log(img);

for (let i = 0; i < spacing.length; i++) {
    spacing[i].addEventListener('change', (e) => {
        console.log(e.target.value);
        img.width = `${e.target.value}px`;
        img.height = `${parseInt(e.target.value) - 250}px`;
    });
}


const blur = document.getElementsByClassName('.blur');

for (let i = 0; i < blur.length; i++) {
    blur[i].addEventListener('change', (e) => {
        console.log(e.target.value);
        
       
    });
}





