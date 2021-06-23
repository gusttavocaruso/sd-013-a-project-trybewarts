/* validação de form login  */
const email = document.getElementById('email-input');
const senha = document.getElementById('senha-input');
const button = document.getElementById('btn');
const agreement = document.getElementById('agreement');
const enviar = document.getElementById('submit-btn');
const textArea = document.querySelector('#textarea');
const counter = document.getElementById('counter');

function validationLogin() {
  if ((email.value === 'tryber@teste.com') && (senha.value === '123456')) {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

function checaSubmit() {
  if (agreement.checked === true) {
    enviar.disabled = false;
  } else {
    enviar.disabled = true;
  }
}

function setCounter() {
  const text = textArea.value;
  const counterCharacter = '500' - text.length;
  counter.innerText = counterCharacter;
}

textArea.addEventListener('input', setCounter);
agreement.addEventListener('click', checaSubmit);
button.addEventListener('click', validationLogin);
