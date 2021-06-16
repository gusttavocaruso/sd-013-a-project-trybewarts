const email = document.getElementById('email');
const password = document.getElementById('password');
const butao = document.querySelector('.butao');

function checkLogin() {
  if ((email.value === 'tryber@teste.com') && (password.value === '123456')) {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

butao.addEventListener('click', checkLogin);
