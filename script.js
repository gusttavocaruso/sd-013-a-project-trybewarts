function checkLogin() {
  const login = document.getElementById('login').value;
  const senha = document.getElementById('senha').value;
  if (login === 'tryber@teste.com' || senha === 123456) {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}
checkLogin();

function buttonOn() {
  const button = document.getElementById('submit-btn');

  button.disabled = false;
}

buttonOn();
