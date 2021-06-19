const buttonForm = document.getElementById('login-button');
const rateField = document.querySelector('.rate-field');
const agreementField = document.querySelector('#agreement');
const submitButton = document.querySelector('#submit-btn');
buttonForm.addEventListener('click', () => {
  const loginValue = document.getElementById('form-login').value;
  const passwordValue = document.getElementById('form-password').value;
  if (loginValue === 'tryber@teste.com' && passwordValue === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
});

function setRateField() {
  for (let i = 0; i < 10; i += 1) {
    const newRate = document.createElement('input');
    const spanValue = document.createElement('span');
    newRate.type = 'radio';
    newRate.name = 'rate';
    newRate.value = i + 1;
    spanValue.innerHTML = i + 1;
    rateField.appendChild(newRate);
    rateField.appendChild(spanValue);
  }
}
setRateField();

agreementField.addEventListener('click', () => {
  if (agreementField.checked) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
});
