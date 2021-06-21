const inpuLogin = document.querySelector('#input-login');
const inpuSenha = document.querySelector('#input-senha');
const buttonLogin = document.querySelector('#button-enviar');
const buttonEnviar = document.querySelector('#submit-btn');
const checkbox = document.querySelector('#agreement');
const textArea = document.getElementById('textarea');
const counter = document.getElementById('counter');

function VerificaLogin() {
  const login = inpuLogin.value;
  const senha = inpuSenha.value;
  if (login === 'tryber@teste.com' && senha === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}
buttonLogin.addEventListener('click', VerificaLogin);

function activeButton() {
  if (checkbox.checked) {
    buttonEnviar.disabled = false;
  }
}
checkbox.addEventListener('click', activeButton);

function setCounterText() {
  const textAreaText = textArea.value;
  const counterText = 500 - textAreaText.length;
  counter.innerText = counterText;
}

textArea.addEventListener('input', setCounterText);
