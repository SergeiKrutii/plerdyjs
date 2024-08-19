const form = document.querySelector('[modal-form]');
const nameInput = document.getElementById('name');
const phoneInput = document.getElementById('phone');
const nameError = document.getElementById('modal__name_erorr');
const phoneError = document.getElementById('modal__phone_erorr');
const submitButton = document.getElementById('button_submit');

document.getElementById('phone').addEventListener('input', function (e) {
  e.target.value = e.target.value.replace(/\D/g, '');
});

function removeError(inputElement, errorElement) {
  inputElement.classList.remove('input-error');
  errorElement.style.display = 'none';
}

nameInput.addEventListener('input', function () {
  removeError(nameInput, nameError);
});

phoneInput.addEventListener('input', function () {
  removeError(phoneInput, phoneError);
});

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const userName = nameInput.value.trim();
  const userPhone = phoneInput.value.trim();

  if (userName === '') {
    nameInput.classList.add('input-error');
    nameError.style.display = 'block';
  } else {
    nameInput.classList.remove('input-error');
    nameError.style.display = 'none';
  }

  if (userPhone === '') {
    phoneInput.classList.add('input-error');
    phoneError.style.display = 'block';
  } else {
    phoneInput.classList.remove('input-error');
    phoneError.style.display = 'none';
  }

  if (userName && userPhone) {
    console.log('Name:', userName);
    console.log('Phone:', userPhone);
    form.reset();
    nameError.style.display = 'none';
  }
});
