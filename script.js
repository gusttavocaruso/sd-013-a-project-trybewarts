function verifyUser() {
  const correcLogin = 'tryber@teste.com';
  const correctPassword = '123456';

  const login = document.querySelector('#login');
  const password = document.querySelector('#password');

  if (login.value === correcLogin && password.value === correctPassword) {
    alert('Olá, Tryber!');
    login.value = '';
    password.value = '';
  } else {
    alert('Login ou senha inválidos.');
  }
}

function formLogin() {
  const form = document.querySelector('#loginForm');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    verifyUser();
  });
}

formLogin();
