// burger menu
const burger = document.querySelector('#burger'),
    header = document.querySelector('.header'),
    overlay = document.querySelector('.header_overlay'),
    link1 = document.querySelector('#link1'),
    link2 = document.querySelector('#link2'),
    link3 = document.querySelector('#link3'),
    link4 = document.querySelector('#link4');

burger.addEventListener('click', function () {
    header.classList.toggle('open')
})

overlay.addEventListener('click', function () {
    header.classList.toggle('open')
})

link1.addEventListener('click', function () {
    header.classList.remove('open')
})

link2.addEventListener('click', function () {
    header.classList.remove('open')
})

link3.addEventListener('click', function () {
    header.classList.remove('open')
})

link4.addEventListener('click', function () {
    header.classList.remove('open')
})