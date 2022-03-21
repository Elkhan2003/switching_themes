const tog = document.getElementById('dark');
const body = document.querySelector('body');
const h = document.querySelector('h1')

let s = 'Good morning'
let m = 'Good evening'

tog.addEventListener('click', function () {
    this.classList.toggle("bi-moon");
    if (this.classList.toggle('bi-brightness')) {
        body.style.background = '#474A51';
        body.style.color = 'white';
        body.style.transition = '2s';
        h.innerHTML = m
    } else {
        body.style.background = '#FCE883';
        body.style.color = 'black';
        body.style.transition = '2s';
        h.innerHTML = s
    }
});