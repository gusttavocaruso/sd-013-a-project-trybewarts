const buttonLogin = document.getElementById('entrar');
const inputLogin = document.getElementById('login');
const inputPassword = document.getElementById('senha');

buttonLogin.addEventListener('click', () => {
  if (
    inputLogin.value !== 'tryber@teste.com'
    || inputPassword.value !== '123456'
  ) {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
});
