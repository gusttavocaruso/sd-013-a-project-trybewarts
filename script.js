const login = document.querySelector('#login');
const senha = document.querySelector('#senha');

function validaEmail() {
  if ((login.value === 'tryber@teste.com') && (senha.value === '123456')) {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}
const botaoLogin = document.querySelector('#botao-login');
botaoLogin.addEventListener('click', validaEmail);

const inputAgree = document.querySelector('#agreement');
const buttonSubmit = document.querySelector('#submit-btn');

buttonSubmit.disabled = true;

function ativaSubmit() {
  if (inputAgree.value === null) {
    buttonSubmit.disabled = true;
  } else {
    buttonSubmit.disabled = false;
  }
}
inputAgree.addEventListener('click', ativaSubmit);
