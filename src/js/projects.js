import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    spaceBetween: 40,

    navigation: {
      nextEl: '.next-arrow-btn',
      prevEl: '.previous-arrow-btn',
    },
  });
});
