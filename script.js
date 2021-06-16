const loginInput = document.getElementById('login');
const passInput = document.getElementById('pass');
const loginButton = document.getElementById('login-bt');
const submitCheck = document.getElementById('agreement');
const submitButton = document.getElementById('submit-btn');

const dataLogin = {
  login: 'tryber@teste.com',
  pass: '123456',
};

function loginAuthentication() {
  const loginText = loginInput.value;
  const passText = passInput.value;
  if (dataLogin.login === loginText && dataLogin.pass === passText) {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

function agreeInfos() {
  if (submitCheck.checked) {
    submitButton.removeAttribute('disabled');
  } else {
    submitButton.setAttribute('disabled', 'disabled');
  }
}

loginButton.onclick = loginAuthentication;
submitCheck.onclick = agreeInfos;
