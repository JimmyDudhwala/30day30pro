

const button = document.querySelector("button");
const container = document.querySelector(".locationLogo")


console.log(button)

button.addEventListener("click", (e)=>{
    console.log(e);
    if(navigator.geolocation){
        
        container.style.height= `80px`;
        container.style.width=`250px`
        button.style.height=`80px`;
        button.style.width=`200px`;
        button.innerText = "Allow to detect location";

        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }else{
        button.innerText = "Your browser not support";
    }
});

function onSuccess(position){
    button.innerText = "Detecting your location...";
    let {latitude, longitude} = position.coords;
    fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=17868f6940884b0db97200021d836480`)
    .then(response => response.json()).then(response =>{
        let allDetails = response.results[0].components;
        console.table(allDetails);
        let {county, postcode, country} = allDetails;
        button.innerText = `${county} ${postcode}, ${country}`;
    }).catch(()=>{
        button.innerText = "Something went wrong";
    });
}

function onError(error){
    if(error.code == 1){
        button.innerText = "You denied the request";
    }else if(error.code == 2){
        button.innerText = "Location is unavailable";
    }else{
        button.innerText = "Something went wrong";
    }
    button.setAttribute("disabled", "true");
}
