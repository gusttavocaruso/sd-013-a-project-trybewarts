function checkLogin() {
  const getLogin = document.querySelector('#login');
  const getPassword = document.querySelector('#password');

  if (getLogin.value === 'tryber@teste.com' && getPassword.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

const getBtn = document.querySelector('#btn-login');
getBtn.addEventListener('click', checkLogin);
