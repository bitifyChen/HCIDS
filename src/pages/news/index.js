import { filter,search } from '@/common';

// Swiper JS
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

import '@/pages/news/index.scss';

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

document.addEventListener('DOMContentLoaded', () => {
  //Filter
  const _filterDom = document.querySelectorAll('.category ul li');
  if (_filterDom) filter(_filterDom,'main')
  
  //Search
  const _searchDom = document.querySelector('#search');
  if (_searchDom) search(_searchDom,'main')
});
