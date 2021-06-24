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
const casaSelect = document.querySelector('#house');
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

textArea.addEventListener('input', () => {
  count = 500 - textArea.value.length;
  inserirContador();
});

// Vamos ver se o merge funciona

// Alterando cor do select
casaSelect.addEventListener('change', () => {
  if (casaSelect.value === 'Corvinode') {
    casaSelect.style.backgroundColor = '#245874';
    casaSelect.style.color = 'white';
  } else if (casaSelect.value === 'Gitnória') {
    casaSelect.style.backgroundColor = '#3C0F0A';
    casaSelect.style.color = 'white';
  } else if (casaSelect.value === 'Reactpuff') {
    casaSelect.style.backgroundColor = '#E7AE22';
    casaSelect.style.color = 'black';
  } else if (casaSelect.value === 'Pytherina') {
    casaSelect.style.backgroundColor = '#417960';
    casaSelect.style.color = 'black';
  }
});
