const login = document.getElementById('login');
const password = document.getElementById('password');
const btnLogin = document.getElementById('btn-logar');
const notaContainer = document.getElementById('nota-container');
const agreement = document.getElementById('agreement');
const btnEnviar = document.getElementById('submit-btn');
const getCounter = document.querySelector('#counter');
const getTextArea = document.querySelector('#textarea');
const loginResister = 'tryber@teste.com';
const passwordResister = '123456';
const msgValidate = 'Olá, Tryber!';
const msgNoValidate = 'Login ou senha inválidos.';

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

function habilitaBtn() {
  if (this.checked) {
    btnEnviar.disabled = false;
  } else {
    btnEnviar.disabled = true;
  }
}

btnLogin.addEventListener('click', showLogin);

for (let i = 1; i <= 10; i += 1) {
  const input = document.createElement('input');
  input.setAttribute('type', 'radio');
  input.setAttribute('name', 'rate');
  input.setAttribute('value', i);
  notaContainer.append(i);
  notaContainer.appendChild(input);
}

btnEnviar.disabled = true;
agreement.addEventListener('change', habilitaBtn);

const checkSizeComment = (event) => {
  const getTextLength = event.target.value;
  const setCharactersLeft = getTextArea.maxLength - getTextLength.length;
  getCounter.innerText = setCharactersLeft;
};

getTextArea.addEventListener('keyup', checkSizeComment);
