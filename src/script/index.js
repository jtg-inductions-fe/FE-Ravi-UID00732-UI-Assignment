import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';

const hamburger = document.getElementsByClassName('hamburger__container')[0];
const navMenu = document.getElementsByClassName('navbar__menu')[0];

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('is-open');
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
