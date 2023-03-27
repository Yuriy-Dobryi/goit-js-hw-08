import _throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const FEEDBACK_FORM_STATE_KEY = 'feedback-form-state';

function loadFormDataFromStorage() {
  const formDataStorage = JSON.parse(localStorage.getItem(FEEDBACK_FORM_STATE_KEY));
  if (formDataStorage) {
    form.elements.email.value = formDataStorage.email;
    form.elements.message.value = formDataStorage.message;
  }
}

loadFormDataFromStorage();

form.addEventListener('input', _throttle(({ currentTarget }) =>
  localStorage.setItem(FEEDBACK_FORM_STATE_KEY,
    JSON.stringify({
      email: currentTarget.elements.email.value,
      message: currentTarget.elements.message.value,
    })
  ), 500)
);

form.addEventListener('submit', e => {
  e.preventDefault();
  console.log(localStorage.getItem(FEEDBACK_FORM_STATE_KEY));
  localStorage.removeItem(FEEDBACK_FORM_STATE_KEY);
  form.reset();
});