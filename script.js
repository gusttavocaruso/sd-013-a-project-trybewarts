function checkLogin() {
  const getLogin = document.querySelector('#login');
  const getPassword = document.querySelector('#password');

  if (getLogin.value === 'tryber@teste.com' && getPassword.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

const getBtn = document.querySelector('#btn-login');
getBtn.addEventListener('click', checkLogin);

const input = document.querySelector('#agreement');
const button = document.querySelector('#submit-btn');
button.disabled = true;
function sendButton() {
  if (input.value === '') {
    button.disabled = true;
  } else {
    button.disabled = false;
  }
}

input.addEventListener('change', sendButton);

const count = document.querySelector('#counter');
const text = document.querySelector('#textarea');

function textCounter() {
  count.innerHTML = (`${500 - text.value.length} caracteres restantes`);
}
text.addEventListener('keyup', textCounter);
