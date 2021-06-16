const btnLogar = document.querySelector('#btn-logar');
const txtLogin = document.querySelector('#login');
const txtSenha = document.querySelector('#senha');
const btnEnviar = document.querySelector('#submit-btn');
const agreement = document.querySelector('#agreement');

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
