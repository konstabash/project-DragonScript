import Accordion from 'accordion-js';
import Swiper from 'swiper/bundle';
import 'accordion-js/dist/accordion.min.css';
import 'swiper/css/bundle';

document.addEventListener('DOMContentLoaded', () => {
  const accordionAboutMe = new Accordion('.accordion-container', {
    duration: 400,
    showMultiple: true,
  });
  accordionAboutMe.open(0);

const aboutSwiperContainer = document.querySelector('.about-me-swiper');

if (aboutSwiperContainer) {
  const aboutSwiper = new Swiper(aboutSwiperContainer, {
    loop: true,
    touchRatio: 1,
    speed: 600,
    grabCursor: true,
    simulateTouch: true,
    mousewheel: true,
    
    navigation: {
      nextEl: '.about-me-swiper-next',
    },
    keyboard: { 
      enabled: true, 
      onlyInViewport: true 
    },
    
    slidesPerGroup:1,
    slidesPerView: 2,
    breakpoints: { 
      768: { 
        slidesPerView: 3 
      }, 
      1440: {
        slidesPerView: 6
      } 
    },
  });
}
});