const valid_login = 'tryber@teste.com';
const valid_password = '123456';

/* Elementos */
const inputLogin = document.getElementById('input-login');
const inputPassword = document.getElementById('input-password');

/* Botões */
const loginBtn = document.getElementById('login-btn');

function authLogin() {
  if (inputLogin.value !== valid_login || inputPassword.value !== valid_password) {
    alert('Login ou senha inválidos.');
  }
  else {
    alert('Olá, Tryber!');
  }
}
loginBtn.addEventListener('click', authLogin);