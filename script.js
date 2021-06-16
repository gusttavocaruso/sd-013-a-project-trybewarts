function checkLogin() {
  const login = document.getElementById('login').value;
  const senha = document.getElementById('senha').value;

  if (login === 'tryber@teste.com' && senha === '123456') {
    window.alert('Olá, Tryber!')
  } else {
    window.alert('Login ou senha inválidos.')
  }
};

document.getElementsByClassName('btn-login')[0].addEventListener('click', checkLogin);