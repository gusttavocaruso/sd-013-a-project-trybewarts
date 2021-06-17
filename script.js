const buttonLogin = document.getElementById('login-button');

buttonLogin.addEventListener('click', () => {
  const inputlogin = document.getElementById('login-input').value;
  const inputPass = document.getElementById('pass-input').value;
  if (inputlogin !== 'tryber@teste.com' || inputPass !== '123456') {
    return alert('Login ou senha inválidos.');
  }
  return alert('Olá, Tryber!');
});
