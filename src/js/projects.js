import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const prevButton = document.querySelector('.previous-arrow-btn');
const nextButton = document.querySelector('.next-arrow-btn');

const projSwiper = new Swiper('.proj-swiper', {
  effect: 'cube',
  cubeEffect: {
    slideShadows: true,
    shadow: true,
    shadowOffset: 20,
    shadowScale: 0.94,
    
  },
  direction: 'horizontal',
  loop: false,
  spaceBetween: 40,
  speed: 2000,
  // containerModifierClass: "proj-",
  navigation: {
    nextEl: '.press-button.next-arrow-btn',
    prevEl: '.press-button.previous-arrow-btn',
    disabledClass: 'disabled',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});
prevButton.classList.add('disabled');

projSwiper.on('slideChange', () => {
  if (projSwiper.isBeginning) {
    prevButton.classList.add('disabled');
  } else {
    prevButton.classList.remove('disabled');
  }

  if (projSwiper.isEnd) {
    nextButton.classList.add('disabled');
  } else {
    nextButton.classList.remove('disabled');
  }
});  
