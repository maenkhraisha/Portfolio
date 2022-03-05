const errorSpan = document.getElementById('error');
const email = document.getElementById('email');
const form = document.getElementById('contact-form');

function validateEmail() {
  const lowerCase = /^[a-z0-9.@]+$/;
  const result = lowerCase.test(email.value);
  return result;
}

function showError() {
  errorSpan.style.display = 'block';
  errorSpan.textContent = 'Email address must be lowercase';
}
function hideError() {
  errorSpan.style.display = 'none';
  errorSpan.textContent = '';
}

email.addEventListener('input', () => {
  if (!validateEmail()) {
    showError();
  } else {
    hideError();
  }
});

/* if the validation is invalid stop form from send */
form.addEventListener('submit', (event) => {
  if (!validateEmail()) {
    showError();
    event.preventDefault();
  }
});