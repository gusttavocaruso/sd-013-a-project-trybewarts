/* Variaveis */
const btnLogin = document.getElementById('btnlogin');
const inputLogin = document.getElementById('login');
const inputSenha = document.getElementById('senha');

/* função validar login */
btnLogin.addEventListener('click', () => {
  if (inputLogin.value === 'tryber@teste.com' || inputSenha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
});

function botaoCheck() {
  const botao = document.getElementById('submit-btn');
  botao.disabled = true;
  const input = document.getElementById('agreement');
  input.addEventListener('click', () => {
    botao.disabled = false;
  });
}

botaoCheck();
