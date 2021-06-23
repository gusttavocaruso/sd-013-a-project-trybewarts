/* validação de form loguin  */
const email = document.getElementById('email-input');
const senha = document.getElementById('senha-input');

const botao = document.getElementById('btn');

function validationLogin() {
  if ((email.value === 'tryber@teste.com') && (senha.value === '123456')) {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

botao.addEventListener('click', validationLogin);

function checaSubmit() {
  if (agreement.checked === true) {
    enviar.disabled = false;
  } else {
    enviar.disabled = true;
  }
}