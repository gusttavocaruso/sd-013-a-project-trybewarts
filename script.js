const botaoLogar = document.getElementById('logar');
const login = document.getElementById('login');
const password = document.getElementById('password');

botaoLogar.addEventListener('click', () => {
  if (login.value === 'tryber@teste.com' && password.value === '123456') {
    return alert('Olá, Tryber!');
  }
  return alert('Login ou senha inválidos.');
});

const checker = document.getElementById('agreement');
const sendbtn = document.getElementById('submit-btn');

function ativar() {
  if (checker.checked) {
    sendbtn.disabled = false;
  } else {
    sendbtn.disabled = true;
  }
}

ativar();

const textArea = document.querySelector('#textarea');
const counter = document.getElementById('counter');

textArea.onkeyup = function piak() {
  counter.innerHTML = `${500 - this.value.length} restantes`;
};
