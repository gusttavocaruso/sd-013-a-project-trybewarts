// requisito 3
const btnLogin = document.getElementById('btn-login');
const login = document.getElementById('login');
const password = document.getElementById('password');

btnLogin.addEventListener('click', () => {
  if (login.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
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
