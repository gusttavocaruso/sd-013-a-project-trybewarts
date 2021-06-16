// const header = document.querySelector('.header');
// const logoHeader = document.querySelector('.trybewarts-header-logo');
// const formLogin = document.querySelector('.trybewarts-login');
const login = document.querySelector('#email');
const password = document.querySelector('#password');
const buttonEntrar = document.querySelector('#entrar');
// const formEvaluation = document.querySelector('#evaluation-form');
// const buttonAgreement = document.querySelector('#agreement');
// const enviarFormEvaluation = document.querySelector('#submit-btn');
// const counterTextArea = document.querySelector('#counter');
// let count = 500;
// let lenghtDoText;

// Verifica o email e a senha
buttonEntrar.addEventListener('click', () => {
  if (login.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
});

// Verifica se o checkbox 16 foi selecionado para, só então, o botão enviar funcionar
// enviarFormEvaluation.addEventListener('click', (event) => {
//   if (buttonAgreement.value !== 'on') {
//     event.preventDefault();
//   }
// });

// Cria o contador de caracteres da textArea
// addEventListener('input', () => {
//   count -= 1;
// });

// addEventListener('keypress', (event) => {
//   if (event.keyCode === 8 || event.keyCode === 46) {
//     if (event.lenght )
//     count += 1;
//   }
// });
