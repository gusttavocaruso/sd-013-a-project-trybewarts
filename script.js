const inputLogin = document.querySelector('#input-login');
const inputSenha = document.querySelector('#input-senha');
const inputButton = document.querySelector('#login-button');

inputButton.addEventListener('click', () => {
  const login = 'tryber@teste.com';
  const senha = '123456';

  if (inputLogin.value !== login || inputSenha.value !== senha) {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
});
