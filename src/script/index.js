const hamburger = document.getElementById('hamburger');
const hamburgerIcon = document.getElementById('hamburger-icon');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('is-open');
    hamburger.classList.toggle('is-active');

    if (hamburger.classList.contains('is-active')) {
        hamburgerIcon.src = 'public/assets/images/hamburger_white.svg';
    } else {
        hamburgerIcon.src = 'public/assets/images/hamburger_blue.svg';
    }
});
