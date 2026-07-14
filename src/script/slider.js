import Swiper from 'swiper';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

export function initSlider() {
    new Swiper('#releases-slider', {
        modules: [Pagination, Navigation, Autoplay],
        initialSlide: 0,
        centeredSlides: true,
        slidesPerView: 2,
        spaceBetween: 16,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
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
