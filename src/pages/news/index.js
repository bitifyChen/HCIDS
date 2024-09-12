import { filter,search } from '@/common';

// Swiper JS
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

import '@/pages/news/index.scss';

//Swiper
const slides = document.querySelectorAll('#news .swiper-slide');
//如果低於2個改變樣式
const isSlidesOne = slides.length <= 2;
if (isSlidesOne) { 
  const childElement = document.querySelector('#news');
  if (childElement) {
    const parentElement = childElement.parentElement;
    if (parentElement) {
      parentElement.classList.add('slides-one');
    }
  }
}

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
      slidesPerView: isSlidesOne? 1 : 1.5,
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
