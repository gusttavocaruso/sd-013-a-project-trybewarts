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
  if (inputAgree.checked) {
    buttonSubmit.disabled = false;
  } else {
    buttonSubmit.disabled = true;
  }
}
inputAgree.addEventListener('click', ativaSubmit);

const textarea = document.querySelector('#textArea');
const counter = document.querySelector('#counter');
textarea.addEventListener('keyup', () => {
  const caracteres = textarea.value;
  counter.innerHTML = 500 - caracteres.length;
});
