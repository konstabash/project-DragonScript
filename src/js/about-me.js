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


// swipper

  // swipper
// const swiper = new Swiper('.swiper', {
//   // Optional parameters
//   loop: true,

//   // If we need pagination
//   pagination: {
//     el: '.swiper-pagination',
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },

//   // And if we need scrollbar
//   scrollbar: {
//     el: '.swiper-scrollbar',
//   },
//   spaceBetween: 20,
//   breakpoints: {
//     1400: { slidesPerView: 5 }, // For large screens
//     768: { slidesPerView: 4 },  // For tablets
//     480: { slidesPerView: 1 },  // For mobile
//   },
// });
// document.addEventListener('DOMContentLoaded', () => {

//   const swiper = new Swiper('.swiper', {
//     modules: [Navigation],
//     loop: true, // Безкінечний цикл
//     navigation: {
//       nextEl: '.about-me-button-next', // Кнопка "вперед"
//     },
//     speed: 600, // Швидкість прокрутки
//     loopAdditionalSlides: 1, 
//     breakpoints: {
//           1280: { slidesPerView: 7 }, // For large screens
//           768: { slidesPerView: 5  },  // For tablets
//           3200: { slidesPerView: 3 },  // For mobile
//         },// Для кращого циклічного переходу
//   });

//   // Додатково можна додати подію для зміни індексів вручну
//   const nextButton = document.querySelector('.about-me-button-next');
//   nextButton.addEventListener('click', () => {
//     swiper.slideNext(); // Переміщає на наступний слайд
//   });
// });

const aboutSwiperContainer = document.querySelector('.about-me-swiper');

if (aboutSwiperContainer) {
  const aboutSwiper = new Swiper(aboutSwiperContainer, {
    loop: true,
    // loopAdditionalSlides: 6,
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