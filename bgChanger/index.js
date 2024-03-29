const button = document.querySelectorAll('button');
const body = document.querySelector('body');



button.forEach((button)=>{
    console.log(button);

    button.addEventListener("click",(e)=>{
        console.log()
        
        if(e.target.class="red"){
            body.style.backgroundColor=e.target.class;          
        }
       if(e.target.class="green"){
            body.style.backgroundColor="green";
            
        }
        if(e.target.class="blue"){
            body.style.backgroundColor=e.target.class;
           
        }
        if(e.target.class="erase"){
            body.style.backgroundColor=e.target.class;
           
        }

    })
})