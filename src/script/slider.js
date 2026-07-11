import Swiper from 'swiper';
import { Pagination, Navigation } from 'swiper/modules';

export function initSlider() {
    new Swiper('#releases-slider', {
        modules: [Pagination, Navigation],
        initialSlide: 1,
        centeredSlides: true,
        slidesPerView: 2,
        spaceBetween: 16,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            603: {
                slidesPerView: 3,
                spaceBetween: 24,
            },
        },
    });
}
