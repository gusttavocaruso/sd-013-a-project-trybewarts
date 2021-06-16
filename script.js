const btnLogar = document.querySelector('#btn-logar');
const txtLogin = document.querySelector('#login');
const txtSenha = document.querySelector('#senha');
const btnEnviar = document.querySelector('#submit-btn');
const agreement = document.querySelector('#agreement');
const comment = document.querySelector('#textarea');
const counter = document.querySelector('#counter');

counter.innerHTML = 500;
const qtdCharacters = parseInt(counter.textContent, 10);

btnEnviar.disabled = true;

btnLogar.addEventListener('click', function validarLogin() {
  if (txtLogin.value === 'tryber@teste.com' && txtSenha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }

  return this;
});

agreement.addEventListener('click', function validateEnviar(event) {
  if (event.target.checked) {
    btnEnviar.disabled = false;
  } else {
    btnEnviar.disabled = true;
  }

  return this;
});

comment.addEventListener('keyup', function commentCount() {
  counter.innerHTML = qtdCharacters - comment.value.length;

  return this;
});
