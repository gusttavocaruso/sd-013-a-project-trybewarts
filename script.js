window.onload = function carregarPagina() {
  document.getElementById('submit-btn').disabled = true;
};

// Função formulário de Login/Senha

const getButton = document.getElementById('btn-enter');
const getLogin = document.getElementById('input-login');
const getSenha = document.getElementById('input-password');
const login = 'tryber@teste.com';
const senha = '123456';

getButton.addEventListener('click', () => {
  if ((getLogin.value !== login) && (getSenha.value !== senha)) {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
});

// Função habilitar botão de Enviar para

const getEnviar = document.getElementById('submit-btn');
const checkBox = document.getElementById('agreement');

checkBox.addEventListener('click', () => {
  if (checkBox.checked === true) {
    getEnviar.disabled = false;
  } else {
    getEnviar.disabled = true;
  }
});

// Conta caracteres
// Fonte: https://developer.mozilla.org/en-US/docs/Web/API/Element/keyup_event
const getChar = document.getElementById('textarea');
const log = document.getElementById('counter');

getChar.addEventListener('input', () => {
  const maximoCaracteres = getChar.maxLength;
  const inputDigitado = getChar.value.length;
  log.innerText = `Caracteres restantes: ${(maximoCaracteres - inputDigitado)}`;
});
