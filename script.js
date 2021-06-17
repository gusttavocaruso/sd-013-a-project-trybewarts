<<<<<<< HEAD
const btnForm = document.getElementById('btn');
const loginBtn = document.getElementById('loginBtn');
const senhaBtn = document.getElementById('senhaBtn');
const email = 'tryber@teste.com';
const senha = '123456';
btnForm.addEventListener('click', () => {
  if ((loginBtn.value !== email) || (senhaBtn.value !== senha)) {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
});

const botao = document.querySelector("#submit-btn");
const checkBox = document.querySelector("#agreement");

function oi () {
  if (checkBox.checked) {
    botao.disabled = false;
  }else {
    botao.disabled = true;
  }
}
