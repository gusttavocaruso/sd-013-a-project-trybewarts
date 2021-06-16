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
