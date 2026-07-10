import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';

const HAMBURGER_WHITE_PATH = 'public/assets/images/hamburger_white.svg';
const HAMBURGER_BLUE_PATH = 'public/assets/images/hamburger_blue.svg';

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

new Swiper('#releases-slider', {
    modules: [Pagination],

    loop: false,
    centeredSlides: true,
    slidesPerView: 2,
    spaceBetween: 16,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    breakpoints: {
        603: {
            slidesPerView: 3,
            spaceBetween: 24,
        },
    },
});
