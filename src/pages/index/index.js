// Swiper JS
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

import '@/pages/index/index.scss';
import '@/pages/news/index.scss';

//Swiper
const swiperTop = new Swiper('#top', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '#top > .swiper-pagination',
  },
});
//Swiper
const swiperNews = new Swiper('#news', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  breakpoints: {
    768: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
  },
  pagination: {
    el: 'section.news .swiper-pagination',
  },
});
