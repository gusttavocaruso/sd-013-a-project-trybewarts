function alertaLogin() {
  const getButton = document.querySelector('#button1');
  const getEmail = document.querySelector('#email');
  const getSenha = document.querySelector('#senha');

  getButton.addEventListener('click', () => {
    if (getEmail.value === 'tryber@teste.com' && getSenha.value === '123456') {
      window.alert('Olá, Tryber!');
    } else {
      window.alert('Login ou senha inválidos.');
    }
  });
}
alertaLogin();

// ===============================================================
//     REQUISITO 18 - BOTÃO ENVIAR
// ===============================================================

const checkbox = document.getElementById('agreement');

function buttonSubmit() {
  const agreement = document.getElementById('agreement').checked;
  const btn = document.getElementById('submit-btn');
  if (agreement) {
    btn.disabled = false;
  } else {
    btn.disabled = true;
  }
}

checkbox.addEventListener('input', buttonSubmit);

// ===============================================================
//     REQUISITO 20 - CONTADOR
// ===============================================================

const maxLength = 500;
const area = document.getElementById('textarea');

function countTextArea() {
  const span = document.getElementById('counter');
  const textarea = document.getElementById('textarea');
  const count = textarea.value.length;
  span.innerText = maxLength - count;
}

area.addEventListener('input', countTextArea);
