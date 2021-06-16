const loginOnPage = () => {
  const inputlogin = document.getElementById('login-input').value;
  const inputPass = document.getElementById('pass-input').value;
  const buttonLogin = document.getElementById('login-button');

  buttonLogin.addEventListener('click', () => {
    if (inputlogin != 'tryber@teste.com' || inputPass != '123456') {
      return alert('Login ou senha inválidos');
    } else {
      return alert('Olá, Tryber!');
    }
  })
}
loginOnPage();