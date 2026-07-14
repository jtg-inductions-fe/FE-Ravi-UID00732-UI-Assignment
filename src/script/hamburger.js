const HAMBURGER_WHITE_PATH = 'public/assets/images/hamburger_white.svg';
const HAMBURGER_BLUE_PATH = 'public/assets/images/hamburger_blue.svg';

export function initHamburger() {
    const hamburger = document.getElementById('hamburger');
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const navMenu = document.getElementById('nav-menu');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('--open');
        hamburger.classList.toggle('--active');

        if (hamburger.classList.contains('--active')) {
            hamburgerIcon.src = HAMBURGER_WHITE_PATH;
        } else {
            hamburgerIcon.src = HAMBURGER_BLUE_PATH;
        }
    });
}
