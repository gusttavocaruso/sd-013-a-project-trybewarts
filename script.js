const btnForm = document.getElementById('btn');
const loginBtn = document.getElementById('loginBtn');
const senhaBtn = document.getElementById('senhaBtn');
const email = 'tryber@teste.com';
const senha = '123456';

function Eventclick(e) {
  e.preventDefault();
  if ((loginBtn.value === email) && (senhaBtn.value === senha)) {
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
const storyTextArea = document.querySelector('#story');
const info = document.querySelector('#counter');

storyTextArea.oninput = function () {
  info.innerHTML = (500 - this.value.length);
};
