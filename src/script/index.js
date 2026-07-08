const hamburger = document.getElementsByClassName('hamburger__container')[0];
const navMenu = document.getElementsByClassName('navbar__menu')[0];

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('is-open');
});
