const btnForm = document.getElementById('btn');
const login = document.getElementById('loginBtn');
const senhaInput = document.getElementById('senhaBtn');
const email = 'tryber@teste.com';
const senha = '123456';

function Eventclick(e) {
  e.preventDefault();
  if ((login.value === email) && (senhaInput.value === senha)) {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}
btnForm.addEventListener('click', Eventclick);

const env = document.querySelector('#submit-btn');
const box = document.querySelector('#agreement');

function oi() {
  if (box.checked) {
    env.disabled = false;
  } else {
    env.disabled = true;
  }
}

document.getElementById('agreement').addEventListener('click', oi);

// // CONTADOR TEXTAREA
// const storyTextArea = document.querySelector('#textarea');
// // const info = document.querySelector('#counter');

// function validar(e) {
//   const inputLength = storyTextArea.value.length;
//   const maxChars = 500;
//   if (inputLength >= maxChars) {
//     e.preventDefault();
//   }
// }

// storyTextArea.addEventListener('keypress', validar);
