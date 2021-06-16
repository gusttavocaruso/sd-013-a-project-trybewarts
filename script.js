// Requisito 3
const formButton = document.querySelector('.trybewarts-login button');
const inputEmail = document.querySelector('#email');
const inputPassword = document.querySelector('#password');

formButton.addEventListener('click', () => {
  if (inputEmail.value !== 'tryber@teste.com' && inputPassword.value !== '123456') {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
});

// Requisito 14
const radioDiv = document.querySelector('.radio-buttons-rate');