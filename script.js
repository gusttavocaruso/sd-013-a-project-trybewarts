function verificaLogin() {
  const login = document.querySelector('#login');
  const senha = document.querySelector('#senha');
  const logar = document.querySelector('#btn-logar');
  logar.addEventListener('click', () => {
    if (login.value !== 'tryber@teste.com' || senha.value !== '123456') {
      alert('Login ou senha inválidos.');
    } else {
      alert('Olá, Tryber!');
    }
  });
}
verificaLogin();

function habilitarBotao() {
  const botao = document.querySelector('#submit-btn');
  const checkBox = document.querySelector('#agreement');
  botao.disabled = true;
  checkBox.addEventListener('change', (event) => {
    if (event.target.checked) {
      botao.disabled = false;
    } else {
      botao.disabled = true;
    }
  });
}
habilitarBotao();

function counterTextArea() {
  const textArea = document.getElementById('textarea');
  const counter = document.getElementById('counter');
  textArea.addEventListener('keyup', () => {
    counter.innerText = `Restante: ${500 - textArea.value.length} caracteres.`;
  });
}
counterTextArea();
