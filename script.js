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
