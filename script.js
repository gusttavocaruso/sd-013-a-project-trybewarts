const ratesTarget = document.getElementById('rates');
const formLogin = document.forms[0];

function handleFormSubmission(e) {
  e.preventDefault();

  const formData = new FormData(e.target);
  const login = formData.get('login');
  const password = formData.get('password');

  let msg = 'Olá, Tryber!';
  if (login !== 'tryber@teste.com' || password !== '123456') msg = 'Login ou senha inválidos.';
  alert(msg);
}

function createRateLabel(rate) {
  const labelEl = document.createElement('label');
  labelEl.for = rate;

  return labelEl;
}

function createInputRadio(rate) {
  const radioEl = document.createElement('input');
  radioEl.type = 'radio';
  radioEl.id = rate;
  radioEl.value = rate;
  radioEl.name = 'rate';

  const labelEl = createRateLabel(rate);
  labelEl.appendChild(radioEl);
  labelEl.innerHTML += rate;
  ratesTarget.appendChild(labelEl);
}

function createRatesRadios() {
  for (let i = 1; i <= 10; i += 1) createInputRadio(String(i));
}

function prevent() {
  const submitButton = document.querySelector('#submit-btn');
  const inputCheckbox = document.querySelector('#agreement');
  submitButton.disabled = true;
  inputCheckbox.addEventListener('click', () => {
    if (inputCheckbox.checked) {
      submitButton.disabled = false;
    }
  });
}

function maxTextArea() {
  const textArea = document.querySelector('#textarea');
  const spanCounter = document.querySelector('#counter');
  spanCounter.innerText = 500;
  textArea.addEventListener('keyup', () => {
    const valor = textArea.value.length;
    spanCounter.innerText = 500 - valor;
  });
}

window.onload = () => {
  createRatesRadios();
  formLogin.addEventListener('submit', handleFormSubmission);
  prevent();
  maxTextArea();
};
