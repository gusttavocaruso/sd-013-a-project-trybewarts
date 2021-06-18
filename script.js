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

// Contador de caracteres disponiveis no textarea
const textArea = document.querySelector('#textarea');

function contador() {
  const counter = document.querySelector('#counter');
  const limite = 500;
  const caracteresDigitados = textArea.value;
  counter.innerHTML = limite - caracteresDigitados.length;
}

textArea.addEventListener('keyup', contador);
