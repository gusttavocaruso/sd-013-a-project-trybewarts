const header = document.querySelector('.header');
const logoHeader = document.querySelector('.trybewarts-header-logo');
const formLogin = document.querySelector('.trybewarts-login');
const login = document.querySelector('#email');
const password = document.querySelector('#password');
const buttonEntrar = document.querySelector('#entrar');
const formEvaluation = document.querySelector('#evaluation-form');

// Verifica o email e a senha
buttonEntrar.addEventListener('click', () => {
  if (login.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
});
