const inputLogin = document.querySelector('#login');
const inputSenha = document.querySelector('#senha');
const loginPadrao = 'tryber@teste.com';
const senhaPadrao = '123456';
const buttonLogin = document.querySelector('#buttonLogin');

function loginValido() {
  const loginValue = inputLogin.value;
  const senhaValue = inputSenha.value;

  if (loginValue === loginPadrao && senhaValue === senhaPadrao) {
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
    btnSubmit.style.color = 'rgb(141, 163, 156)';
  }
});

// Cria contador de caracteres da textarea
const counter = document.querySelector('#counter');
const textarea = document.querySelector('#textarea');

textarea.addEventListener('keyup', () => {
  counter.innerHTML = 500 - textarea.value.length;
});
