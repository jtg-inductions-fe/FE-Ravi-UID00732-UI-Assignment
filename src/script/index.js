const HAMBURGER_WHITE_PATH = 'public/assets/images/hamburger_white.svg';
const HAMBURGER_BLUE_PATH = 'public/assets/images/hamburger_blue.svg';

const hamburger = document.getElementById('hamburger');
const hamburgerIcon = document.getElementById('hamburger-icon');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('is-open');
    hamburger.classList.toggle('is-active');

    if (hamburger.classList.contains('is-active')) {
        hamburgerIcon.src = HAMBURGER_WHITE_PATH;
    } else {
        hamburgerIcon.src = HAMBURGER_BLUE_PATH;
    }
});
