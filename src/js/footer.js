import axios from 'axios';

axios.defaults.baseURL = 'https://portfolio-js.b.goit.study/api';

const refs = {
  userEmail: document.querySelector('[name="email"]'),
  userComment: document.querySelector('[name="comment"]'),
  form: document.querySelector('.footer-form'),
  crossBtn: document.querySelector('.modal-close-btn'),
  modal: document.querySelector('.backdrop'),
  isValidMessage: document.querySelector('.form-error-message'),
};

refs.form.addEventListener('submit', onSubmit);

async function onSubmit(e) {
  e.preventDefault();
  if (refs.userEmail.dataset.state === 'error') {
    return;
  }
  refs.isValidMessage.textContent = '';
  refs.userEmail.style.borderBottomColor = 'rgba(250, 250, 250, 0.2)';
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
    console.log('modal opened');
    e.target.reset();
  } catch {
    console.log('izitoast');
  }
}

async function sendRequest(user) {
  const { data } = await axios.post('/requests', user);
  return data;
}

const regex = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

refs.userEmail.addEventListener('blur', blurEmailHandler);
refs.userComment.addEventListener('blur', blurCommentHandler);

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
    console.log('valid');
  } else {
    showErrorMessage(e);
    e.currentTarget.dataset.state = 'error';
    console.log('invalid');
  }
}

function blurCommentHandler(e) {
  const userComment = e.currentTarget.value.trim();
  if (userComment === '') {
    e.currentTarget.style.borderBottomColor = 'rgba(250, 250, 250, 0.2)';
    return;
  }
}

// MODAL
document.body.style.overflow = 'hidden';
refs.crossBtn.addEventListener('click', toggleModal);

function toggleModal() {
  refs.modal.classList.toggle('is-open');
  document.body.style.overflow = '';
}

refs.modal.addEventListener('click', closeModal);

function closeModal(e) {
  if (e.currentTarget !== e.target) {
    return;
  }
  refs.modal.classList.remove('is-open');
  document.body.style.overflow = '';
}
