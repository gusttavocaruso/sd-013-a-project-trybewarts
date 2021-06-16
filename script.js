const login = document.getElementById('login');
const password = document.getElementById('password');
const btnLogin = document.getElementById('btn-logar');
const loginResister = 'tryber@teste.com';
const passwordResister = '123456';
const msgValidate = 'Olá, Tryber!';
const msgNoValidate = 'Login ou senha inválidos';

function showAlert(msg) {
  alert(msg);
}

function showLogin() {
  if ((login.value === loginResister) && (password.value === passwordResister)) {
    showAlert(msgValidate);
  } else {
    showAlert(msgNoValidate);
  }
}

btnLogin.addEventListener('click', showLogin);
