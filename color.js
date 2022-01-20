const contentColor = document.querySelector('.code__borda');
const selectColor = document.querySelector('#color');

selectColor.addEventListener('input', function(event) {
    let color = event.target.value;
    contentColor.setAttribute(`style`,`background: ${color}`)
})