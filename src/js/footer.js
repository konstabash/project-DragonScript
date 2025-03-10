import axios from 'axios';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import iconError from '/img/sprite.svg#icon-error';

axios.defaults.baseURL = 'https://portfolio-js.b.goit.study/api';

const refs = {
  userEmail: document.querySelector('[name="email"]'),
  userComment: document.querySelector('[name="comment"]'),
  form: document.querySelector('.footer-form'),
  crossBtn: document.querySelector('.modal-close-btn'),
  modal: document.querySelector('.backdrop'),
  isValidMessage: document.querySelector('.form-error-message'),
};
const regex = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

const errorObj = {
  position: 'topRight',
  message: 'An error occurred while processing your request. Please try again.',
  messageColor: '#fafafb',
  messageSize: '16px',
  backgroundColor: '#ed3b44',
  iconUrl: iconError,
};

refs.form.addEventListener('submit', onSubmit);
refs.userEmail.addEventListener('blur', blurEmailHandler);
refs.userComment.addEventListener('blur', blurCommentHandler);
refs.modal.addEventListener('click', closeModal);
refs.crossBtn.addEventListener('click', toggleModal);

refs.userEmail.addEventListener('input', e => {
  e.currentTarget.style.borderBottomColor = 'rgba(250, 250, 250, 0.5)';
  refs.isValidMessage.textContent = '';
});
refs.userComment.addEventListener(
  'input',
  e => (e.currentTarget.style.borderBottomColor = 'rgba(250, 250, 250, 0.5)')
);
document.addEventListener('keydown', e => {
  if (e.code === 'Escape') {
    refs.modal.classList.remove('is-open');
    document.body.style.overflow = '';
  }
});

async function onSubmit(e) {
  e.preventDefault();
  if (refs.userEmail.dataset.state === 'error') {
    return;
  }
  refs.isValidMessage.textContent = '';
  refs.userEmail.style.borderBottomColor = 'rgba(250, 250, 250, 0.2)';
  refs.userComment.style.borderBottomColor = 'rgba(250, 250, 250, 0.2)';
  const inputs = e.currentTarget.elements;
  const user = {
    email: inputs[0].value.trim(),
    comment: inputs[1].value.trim(),
  };
  if (user.comment === '') {
    return;
  }
  try {
    await sendRequest(user);
    e.target.reset();
    toggleModal();
    document.body.style.overflow = 'hidden';
  } catch {
    iziToast.error(errorObj);
    return;
  }
}

async function sendRequest(user) {
  const { data } = await axios.post('/requests', user);
  return data;
}

function showErrorMessage(e) {
  const errorColor = '#e74a3b';
  refs.isValidMessage.textContent = 'Invalid email, try again';
  refs.isValidMessage.style.color = errorColor;
  e.currentTarget.style.borderBottomColor = errorColor;
  refs.isValidMessage.style.marginTop = '4px';
}

function showSuccessMessage(e) {
  const successColor = '#3cbc81';
  refs.isValidMessage.textContent = 'Success!';
  refs.isValidMessage.style.color = successColor;
  e.currentTarget.style.borderBottomColor = successColor;
  refs.isValidMessage.style.marginTop = '4px';
}

function blurEmailHandler(e) {
  const userEmail = e.currentTarget.value.trim();
  if (userEmail === '') {
    refs.isValidMessage.textContent = '';
    e.currentTarget.style.borderBottomColor = 'rgba(250, 250, 250, 0.2)';
    return;
  }
  const isValid = regex.test(userEmail);
  if (isValid) {
    showSuccessMessage(e);
    e.currentTarget.dataset.state = 'success';
  } else {
    showErrorMessage(e);
    e.currentTarget.dataset.state = 'error';
  }
}

function blurCommentHandler(e) {
  const userComment = e.currentTarget.value.trim();
  if (userComment === '') {
    e.currentTarget.style.borderBottomColor = 'rgba(250, 250, 250, 0.2)';
    return;
  }
}

function toggleModal() {
  refs.modal.classList.toggle('is-open');
  document.body.style.overflow = '';
}

function closeModal(e) {
  if (e.currentTarget !== e.target) {
    return;
  }
  refs.modal.classList.remove('is-open');
  document.body.style.overflow = '';
}
