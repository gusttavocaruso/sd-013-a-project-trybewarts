const login = document.getElementById('login-input');
const senha = document.getElementById('senha-input');
const logar = document.getElementById('logar-button');

function validarLogin() {
  if (login.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

logar.addEventListener('click', validarLogin);

const check = document.getElementById('agreement');
const send = document.getElementById('submit-btn');
send.disabled = true;

function validarEnviar () {
  if (check.checked) {
    send.disabled = false;
  } else {
    send.disabled = true;
  }
}

check.addEventListener('click', validarEnviar);