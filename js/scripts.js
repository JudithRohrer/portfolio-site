(function () {

var $form = document.querySelector('#contact-form');
var $emailInput = document.querySelector('#contact-email');
var $telInput = document.querySelector('#contact-tel');

function showErrorEmail($input, message) {
  var $container = $input.parentElement;

  var error = $container.querySelector('#error-mail');
  if (error) {
    $container.removeChild(error);
  }
  if (message) {
    var error = document.createElement('div');
    error.classList.add('error-message');
    error.setAttribute('id','error-mail');
    error.innerText = message;
    $container.appendChild(error);
  }
}

function showErrorTel($input, message) {
  var $container = $input.parentElement;

  var error = $container.querySelector('#error-tel');
  if (error) {
    $container.removeChild(error);
  }
  if (message) {
    var error = document.createElement('div');
    error.classList.add('error-message');
    error.setAttribute('id','error-tel')
    error.innerText = message;
    $container.appendChild(error);
  }
}


function validateEmail() {
  var value = $emailInput.value;

  if (!value) {
    showErrorEmail($emailInput, 'Email is a required field.');
    return false;
  }

  var isEmailValid = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);

  if (!isEmailValid) {
    showErrorEmail($emailInput, 'Please enter a valid email address.');
    return false;
  }

  showErrorEmail($emailInput, null);
  return true;
}

function validateTel() {
  var value = $telInput.value;

  if (!value) {
    showErrorTel($telInput, 'Telephone is a required field.');
    return false;
  }

  var isTelValid = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(value);

  if (!isTelValid) {
    showErrorTel($telInput, 'Invalide number!');
    return false;
  }

  showErrorTel($telInput, null);
  return true;
}

function validateForm() {
  var isValidEmail = validateEmail();
  var isValidTel = validateTel();
  return isValidEmail && isValidTel;
}

$emailInput.addEventListener('input', validateEmail);
$telInput.addEventListener('input', validateTel);

$form.addEventListener('submit', (e) => {
  e.preventDafault();
  if (validateForm()) {
    alert('Success!');
  }
})
})();
