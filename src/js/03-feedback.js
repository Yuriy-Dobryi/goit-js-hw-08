import _throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const FEEDBACK_FORM_STATE_KEY = 'feedback-form-state';
const formData = {};
const requiredFields = ['email', 'message'];

loadFormDataFromStorage();

form.addEventListener('input', _throttle(saveDataForm, 500));
form.addEventListener('submit', sendDataForm);

function loadFormDataFromStorage() {
  const formDataStorage = JSON.parse(
    localStorage.getItem(FEEDBACK_FORM_STATE_KEY)
  );

  for (const key in formDataStorage) {
    form.elements[key].value = formDataStorage[key];
    formData[key] = formDataStorage[key];
  }
}

function saveDataForm(e) {
  const { name, value } = e.target;
  formData[name] = value;
  localStorage.setItem(FEEDBACK_FORM_STATE_KEY, JSON.stringify(formData));
}

function sendDataForm(e) {
  e.preventDefault();
  const isAllRequiredFieldsFilled = requiredFields.every(field => formData[field]);

  if (isAllRequiredFieldsFilled) {
    console.log(formData);
    clearAllData(e);
  } else {
    alert('Please fill in all required fields');
  }
}

function clearAllData(e) {
  Object.keys(formData).forEach(key => (formData[key] = ''));
  localStorage.removeItem(FEEDBACK_FORM_STATE_KEY);
  e.currentTarget.reset();
}