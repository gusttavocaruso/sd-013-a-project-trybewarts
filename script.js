const login = document.querySelector('#login').value;
const senha = document.querySelector('#senha').value;
const botaoLogin = document.querySelector('#botao-login');

function validaEmail() {
  if (login === 'tryber@teste.com' && senha === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}
botaoLogin.addEventListener('click', validaEmail);
