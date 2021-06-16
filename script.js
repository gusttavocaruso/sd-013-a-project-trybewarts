const inputLogin = document.querySelector('#login');
const inputSenha = document.querySelector('#senha');
const loginPadrao = 'tryber@teste.com';
const senhaPadrao = '123456';
const buttonLogin = document.querySelector('#buttonLogin');

function loginValido() {
  if (inputLogin.value === loginPadrao && inputSenha.value === senhaPadrao) {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}
buttonLogin.addEventListener('click', loginValido);

// Habilita ou desabilita botão de enviar formulario de acordo com checkbox
const checkbox = document.getElementById('agreement');
const btnSubmit = document.getElementById('submit-btn');

checkbox.addEventListener('change', () => {
  if (checkbox.checked) {
    btnSubmit.disabled = false;
    btnSubmit.style.color = 'white';
  } else {
    btnSubmit.disabled = true;
  }
});
