
const drop = document.querySelector('.dropDown');
const input = document.querySelector('input');




async function fetchData() {
    const response = await fetch('https://raw.githubusercontent.com/JimmyDudhwala/json/main/countries%2Bstates.json');
    const data = await response.json();
    return data;
}
async function displayData() {
    const data = await fetchData();

    input.addEventListener('input', () => { 
        const filteredData = data.filter(item => item.name.toLowerCase().includes(input.value.toLowerCase()));
        const keyValuePairs = filteredData.map(item => {
            return `${item.name}, ${item.state}`;
        });

        
        drop.innerHTML = '';

        keyValuePairs.forEach(pair => {
            const item = document.createElement('div');
            item.innerText = pair;
            item.addEventListener('click', () => {
                input.value = pair;
                drop.innerHTML = '';
            });
            drop.appendChild(item);
        });
    });

   if(input.value === ''){
    drop.innerHTML = '';
   }
}

input.addEventListener('input',() => {
   
    displayData();
   
})

