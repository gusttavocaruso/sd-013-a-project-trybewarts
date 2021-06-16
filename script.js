const btnLogar = document.querySelector('#btn-logar');
const txtLogin = document.querySelector('#login');
const txtSenha = document.querySelector('#senha');

btnLogar.addEventListener('click', function validarLogin() {
  if (txtLogin.value === 'tryber@teste.com' && txtSenha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }

  return this;
});
