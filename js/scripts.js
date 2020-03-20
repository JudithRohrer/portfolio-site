(function () {

var $form = document.querySelector('#contact-form');
var $emailInput = document.querySelector('#contact-email');
var $telInput = document.querySelector('#contact-tel');

function showErrorMessage($input, message) {
  var $container = $input.parentElement;

  var error = $container.querySelector('.error-message');
  if (error) {
    $container.removeChild(error);
  }
  if (message) {
    var error = document.createElement('div');
    error.classList.add('error-message');
    error.innerText = message;
    $container.appendChild(error);
  }
}


function validateEmail() {
  var value = $emailInput.value;

  if (!value) {
    showErrorMessage($emailInput, 'Email is a required field.');
    return false;
  }

  if (value.indexOf('@') === -1) {
    showErrorMessage($emailInput, 'Please enter a valid email address.');
    return false;
  }

  if (value.indexOf('.') === -1) {
    showErrorMessage($emailInput, 'Please enter a valid email address.');
    return false;
  }

  showErrorMessage($emailInput, null);
  return true;
}

function validateTel() {
  var value = $telInput.value;

  if (!value) {
    showErrorMessage($telInput, 'Telephone is a required field.');
    return false;
  }

  if (value.length < 10) {
    showErrorMessage($telInput, 'Invalide number!');
    return false;
  }

  if (value.length > 15) {
    showErrorMessage($telInput, 'Invalide number!');
    return false;
  }

  showErrorMessage($telInput, null);
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
