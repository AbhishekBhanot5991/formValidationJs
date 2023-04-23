// get the form element
const form = document.querySelector('#myForm');

// get the error message elements
const nameError = document.querySelector('#nameError');
const emailError = document.querySelector('#emailError');
const passwordError = document.querySelector('#passwordError');

// add a submit event listener to the form
form.addEventListener('submit', function(event) {
  // prevent the form from submitting
  event.preventDefault();

  // get the input values
  const name = document.querySelector('#name').value.trim();
  const email = document.querySelector('#email').value.trim();
  const password = document.querySelector('#password').value;

  // clear the error messages
  nameError.textContent = '';
  emailError.textContent = '';
  passwordError.textContent = '';

  // perform validation on the input fields
  if (name === '') {
    nameError.textContent = 'Please enter your name';
    return;
  }

  if (!isValidEmail(email)) {
    emailError.textContent = 'Please enter a valid email address';
    return;
  }

  if (password.length < 8) {
    passwordError.textContent = 'Password must be at least 8 characters long';
    return;
  }

  // log the form values to the console
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Password:', password);

  // clear the form inputs
  document.querySelector('#name').value = '';
  document.querySelector('#email').value = '';
  document.querySelector('#password').value = '';
});

// helper function to validate email address using regex
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
