// Swiper JS
import Swiper from 'swiper';
import 'swiper/css';

import '@/pages/index/index.scss';
import '@/pages/news/index.scss';

//Swiper
const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    768: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
  },
  // pagination: {
  //   el: '.swiper-pagination',
  // },
  // // Navigation arrows
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },
});
