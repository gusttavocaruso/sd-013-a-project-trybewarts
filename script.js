const btnLogin = document.getElementById('botao');
const btnOn = document.getElementById('agreement');
function checkLogin() {
  const login = document.getElementById('login').value;
  const senha = document.getElementById('senha').value;
  if (login === 'tryber@teste.com' || senha === 123456) {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}
function buttonOn() {
  const button = document.getElementById('submit-btn');

  button.disabled = false;
}

btnLogin.addEventListener('click', checkLogin);
btnOn.addEventListener('click', buttonOn);

const textArea = document.getElementById('textarea');
function characterCount() {
  const contador = document.getElementById('counter');
  const aux = 500 - textArea.value.length;
  contador.innerHTML = aux;
}
textArea.addEventListener('keyup', characterCount);
