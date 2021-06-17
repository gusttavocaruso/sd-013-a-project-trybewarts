/* Variáveis */
const validLogin = 'tryber@teste.com';
const validPassword = '123456';

/* Elementos Login */
const login = document.querySelector('#input-login');
const password = document.querySelector('#input-password');

/* Elementos Forms */
const form = document.querySelector('#evaluation-form');
const name = document.querySelector('#input-name');
const surname = document.querySelector('#input-lastname');
const email = document.querySelector('#input-email');
const house = document.querySelector('#house');
const family = document.querySelectorAll('.family');
const subject = document.querySelectorAll('.subject');
const rating = document.querySelectorAll('.rate');
const comment = document.querySelector('#textarea');
const agree = document.querySelector('#agreement');

/* Botões */
const loginBtn = document.querySelector('#login-btn');
const submitBtn = document.querySelector('#submit-btn');

/* Função para autenticar login */
function authLogin() {
  if (login.value !== validLogin || password.value !== validPassword) {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
}
loginBtn.addEventListener('click', authLogin);

/* Função para habilitar envio de formulário */
function enableSubmit() {
  if (agree.checked) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}
agree.addEventListener('change', enableSubmit);