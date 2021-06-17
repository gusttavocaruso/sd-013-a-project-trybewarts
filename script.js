/* Variáveis */
const validLogin = 'tryber@teste.com';
const validPassword = '123456';

/* Elementos */
const login = document.getElementById('input-login');
const password = document.getElementById('input-password');
const agree = document.getElementById('agreement');
const inputTextArea = document.getElementById('textarea');
const remainingChars = document.getElementById('counter');

/* Botões */
const loginBtn = document.querySelector('#login-btn');
const submitBtn = document.querySelector('#submit-btn');

/* Função para autenticar login */
function authLogin() {
  if (login.value !== validLogin || password.value !== validPassword) {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
}
loginBtn.addEventListener('click', authLogin);

/* Função para habilitar envio de formulário */
function enableSubmit() {
  if (agree.checked) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}
agree.addEventListener('change', enableSubmit);

/* Event listener no input para executar a função de count */
inputTextArea.addEventListener('input', () => {
  const remaining = 500 - inputTextArea.value.length;
  const color = remaining < 500 * 0.1 ? 'red' : null;

  remainingChars.textContent = `${remaining} characters remaining`;
  remainingChars.style.color = color;
});
