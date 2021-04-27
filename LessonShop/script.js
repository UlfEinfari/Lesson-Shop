'use strict';

let brandDark = document.querySelector('.brandDark');
let headerBars = document.querySelector('.menuimg');
let menuClose = document.querySelector('.menuClose');

function toggleMenu() {
    brandDark.classList.toggle('hidden');
}

headerBars.addEventListener('click', toggleMenu);
menuClose.addEventListener('click', toggleMenu);