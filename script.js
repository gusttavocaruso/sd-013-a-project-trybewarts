function tryLogin() {
  const login = document.getElementById('login').value;
  const pwd = document.getElementById('pwd').value;
  if ((login === 'tryber@teste.com') && (pwd === '123456')) {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

const loginButton = document.getElementById('login-button');
loginButton.addEventListener('click', tryLogin, false);
