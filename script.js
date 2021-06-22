// requisito 3
const loginButton = document.getElementById('inputBtn');
const getEmail = document.getElementById('inputEmail');
const getSenha = document.getElementById('inputSenha');

loginButton.addEventListener('click', () => {
  if ((getEmail.value !== 'tryber@teste.com') && (getSenha.value !== '123456')) {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
});

// requisito 18
const checkbox = document.querySelector('#agreement');
const botaoSubmit = document.querySelector('#submit-btn');

checkbox.addEventListener('click', () => {
  if (checkbox.checked) {
    botaoSubmit.removeAttribute('disabled');
  }
});


/* // requisito 21

function renameForm() {
  const main = document.getElementById('main');
  const form = document.getElementById('evaluation-form');
  const inputName = document.querySelector('#input-name').value;
  const inputLastName = document.querySelector('#input-lastname').value;
  const email = document.getElementById('input-email').value;
  const house = document.querySelector('#house').value;
}
 */