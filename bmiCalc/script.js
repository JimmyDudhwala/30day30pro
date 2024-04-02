const form = document.querySelector('form');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#result')
    if(height === "" || height < 0 || isNaN(height) ){
        result.innerHTML =`<span>ENTER VALID DIGIT</span>`
    }
    else if(weight === "" || weight < 0 || isNaN(weight) ){
        result.innerHTML =`<span>ENTER VALID DIGIT</span>`
    }
    else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        
        if(bmi < 18.6)
        {result.innerHTML = `<span>bmi is : ${bmi}</span><br><p>Under Weight = Less than 18.6</p>`;}
        if(bmi > 18.6 || bmi < 42.9)
        {result.innerHTML = `<span>bmi is : ${bmi}</span><br><p>Normal Range = 18.6 and 24.9</p>`;}
        if(bmi>24.9)
        {result.innerHTML = `<span>bmi is : ${bmi}</span><br><p>Overweight = Greater than 24.9</p>`;}
    }

})
