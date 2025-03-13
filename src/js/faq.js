import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
document.addEventListener('DOMContentLoaded', () => {
  new Accordion('.faq-accordion-container', {
    duration: 400,
    showMultiple: false,
  });
});
