const selectAll = document.getElementById('selectAll');
const checkboxes = document.querySelectorAll('.checkbox');

selectAll.addEventListener('click', function() {
    
    checkboxes.forEach(checkbox =>{
        if(selectAll.checked === true)
        checkbox.checked = true;
      else{
        checkbox.checked = false;
      }
    })
});

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('click', () => {
        if(checkbox.checked === false){
            selectAll.checked = false;
        }
        else {
            selectAll.checked = true;
        }
    });
});
