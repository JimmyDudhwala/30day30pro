const gameContainer = document.querySelector('.container');
const result = document.querySelector('.result');
const userResult = document.querySelector('.user-image');
const cpuResult = document.querySelector('.cpu-image');
const option = document.querySelectorAll('.option img');

console.log(gameContainer, result, userResult, cpuResult, option);
option.forEach(function (Image, index) {
    Image.addEventListener("click", function(e) {
        Image.classList.add("active");
        
        
        option.forEach(function(Image, index2){

            if(index2 != index){
                Image.classList.remove("active");
            }
        })
        console.log(e.target);  

        

    });
});
