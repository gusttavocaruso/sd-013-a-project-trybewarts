const formLogin = document.querySelector('#form-login');

function verificaLogin() {
  const login = document.querySelector('#login');
  const senha = document.querySelector('#senha');
  if (login.value !== 'tryber@teste.com' || senha.value !== '123456') {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
}
formLogin.addEventListener('submit', verificaLogin);
