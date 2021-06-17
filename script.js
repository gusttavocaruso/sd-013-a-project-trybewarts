const loginInput = document.getElementById('login');
const passInput = document.getElementById('pass');
const loginButton = document.getElementById('login-bt');
const submitCheck = document.getElementById('agreement');
const submitButton = document.getElementById('submit-btn');
const counterSpan = document.getElementById('counter');
const textArea = document.getElementById('textarea');

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

function getTextAreaLength() {
  const textAreaText = textArea.value;
  return textAreaText.length;
}

function setCounterText() {
  const counterText = 500 - getTextAreaLength();
  counterSpan.innerText = counterText;
}

loginButton.onclick = loginAuthentication;
submitCheck.onclick = agreeInfos;
textArea.addEventListener('input', setCounterText);
