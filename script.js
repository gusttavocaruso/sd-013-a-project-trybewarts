const buttonHeader = document.getElementById('button-submit-header');
const inputLogin = document.getElementById('login-input');
const inputSenha = document.getElementById('senha-input');

function verificarFormHeader() {
  const login = inputLogin.value;
  const senha = inputSenha.value;
  if ((senha === '123456') && (login === 'tryber@teste.com')) {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

buttonHeader.addEventListener('click', verificarFormHeader);

const submitBtn = document.getElementById('submit-btn');
submitBtn.disabled = true;

function verificaCheck() {
  const conteudo = document.getElementById('agreement').value;
  if (conteudo !== null && conteudo !== '') {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}

document.getElementById('agreement').addEventListener('input', verificaCheck);

const textArea = document.getElementById('textarea');
const cont = document.getElementById('counter');

function contadorCaractere() {
  const value = parseInt(textArea.value.length, 10);
  let caracteresRestantes = 500;
  const caracteresDigitados = value;
  caracteresRestantes -= caracteresDigitados;
  cont.innerText = caracteresRestantes;
}

textArea.addEventListener('keydown', contadorCaractere);