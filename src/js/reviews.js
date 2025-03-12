import axios from 'axios';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

async function fetchReviews() {
  try {
    const { data } = await axios.get('https://portfolio-js.b.goit.study/api/reviews');
    return data;
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Failed to load reviews. Please try again later.',
      position: 'topRight',
      timeout: 3000,
    });
    return [];
  }
}

function renderReviews(reviews) {
  const list = document.querySelector('.swiper-wrapper');

  if (reviews.length === 0) {
    list.innerHTML = '<div class="not-found-container"><p class="not-found">Not found</p></div>';
    return;
  }

  list.innerHTML = reviews
    .map(
      review => `
      <li class="swiper-slide">
        <div class="review-card">
          <img src="${review.avatar_url}" alt="${review.author}" class="review-avatar">
          <h3 class="swiper-title">${review.author}</h3>
          <p class="swiper-text">${review.review}</p>
        </div>
      </li>
    `
    )
    .join('');
}

function initSwiper() {
  const prevButton = document.querySelector('.previous-arrow-btn');
  const nextButton = document.querySelector('.next-arrow-btn');

  const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: false,
    spaceBetween: 16,
    speed: 2000,

    navigation: {
      nextEl: '.next-arrow-btn',
      prevEl: '.previous-arrow-btn',
      disabledClass: 'disabled',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
      breakpoints: {
      768: { slidesPerView: 2 },
      1440: { slidesPerView: 4 },
    },
  });

  prevButton.classList.add('disabled');

  swiper.on('slideChange', () => {
    if (swiper.isBeginning) {
      prevButton.classList.add('disabled');
    } else {
      prevButton.classList.remove('disabled');
    }

    if (swiper.isEnd) {
      nextButton.classList.add('disabled');
    } else {
      nextButton.classList.remove('disabled');
    }
  });
}

async function initReviewsSection() {
  const reviews = await fetchReviews();
  renderReviews(reviews);
  initSwiper();
}

document.addEventListener('DOMContentLoaded', initReviewsSection);

