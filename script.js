  const buttonLogin = document.getElementById('login-button');

  buttonLogin.addEventListener('click', () => {
    let inputlogin = document.getElementById('login-input').value;
    let inputPass = document.getElementById('pass-input').value;
    if (inputlogin != 'tryber@teste.com' || inputPass != '123456') {
      return alert('Login ou senha inválidos');
    } else {
      return alert('Olá, Tryber!');
    }
  })