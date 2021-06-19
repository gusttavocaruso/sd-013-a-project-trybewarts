const buttonForm = document.getElementById('login-button');
const rateField = document.querySelector('.rate-field');
const agreementField = document.querySelector('#agreement');
const submitButton = document.querySelector('#submit-btn');
const textAreaField = document.querySelector('#textarea');
const counterField = document.querySelector('#counter');
const formField = document.querySelector('#evaluation-form');
const firstNameInput = document.querySelector('#input-name');
const lastNameInput = document.querySelector('#input-lastname');
const emailInput = document.querySelector('#input-email');
const selectHouse = document.querySelector('#house');

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

textAreaField.addEventListener('keyup', () => {
  const currentValue = textAreaField.value.length;
  const resultCounter = 500 - currentValue;
  counterField.innerHTML = resultCounter;
});

const createResultDiv = () => {
  const newDiv = document.createElement('div');
  newDiv.id = 'result-form-div';
  newDiv.innerHTML += `Nome: ${firstNameInput.value} ${lastNameInput.value}`;
  newDiv.innerHTML += `Email: ${emailInput.value}`;
  newDiv.innerHTML += `Casa: ${selectHouse.value}`;
  const inputFamily = document.querySelector('input[name="family"]:checked');
  newDiv.innerHTML += `Família: ${inputFamily.value}`;
  return newDiv;
}

submitButton.addEventListener('click', event => {
  event.preventDefault();
  const ResultDiv = createResultDiv();
  formField.innerHTML = '';
  formField.appendChild(ResultDiv);
})
