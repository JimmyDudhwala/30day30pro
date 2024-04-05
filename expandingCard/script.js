const panel = document.querySelectorAll('.panel');

console.log(panel);

panel.forEach(panel => {
    panel.addEventListener("click", (e) => {
        if (!e.target.style.backgroundImage) {
            console('yes')
        }
    });
});
