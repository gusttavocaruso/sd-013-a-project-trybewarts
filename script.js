// const header = document.querySelector('.header');
// const logoHeader = document.querySelector('.trybewarts-header-logo');
// const formLogin = document.querySelector('.trybewarts-login');
const login = document.querySelector('#email');
const password = document.querySelector('#password');
const buttonEntrar = document.querySelector('#entrar');
// const formEvaluation = document.querySelector('#evaluation-form');
const checkboxAgreement = document.querySelector('#agreement');
const enviarFormEvaluation = document.querySelector('#submit-btn');
// const counterTextArea = document.querySelector('#counter');
const textArea = document.querySelector('#textarea');
const labelDoContador = document.querySelector('#counter');
let count = 500;

// Verifica o email e a senha
buttonEntrar.addEventListener('click', () => {
  if (login.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
});

// Verifica se o checkbox 16 foi selecionado para, só então, o botão enviar funcionar
checkboxAgreement.addEventListener('click', () => {
  if (checkboxAgreement.checked === true) {
    enviarFormEvaluation.disabled = false;
  } else {
    enviarFormEvaluation.disabled = true;
  }
});

// Cria o contador de caracteres da textArea
function inserirContador() {
  labelDoContador.innerText = count;
}

inserirContador();

// textArea.addEventListener('keydown', (event) => {
//   if (textArea.value !== '') {
//     if ((event.keyCode === 8 || event.keyCode === 46)) {
//       count += 2;
//     }
//   }
// });

textArea.addEventListener('input', () => {
  count = 500 - textArea.value.length;
  inserirContador();
});
