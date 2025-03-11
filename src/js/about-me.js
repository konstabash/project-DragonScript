import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

import Swiper from 'swiper';
import 'swiper/css';


document.addEventListener('DOMContentLoaded', () => {
  new Accordion('.accordion-container', {
    duration: 400,
    showMultiple: false,
  });
});

// swipper
