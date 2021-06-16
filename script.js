let loginButton = document.getElementById('submit-login');
loginButton.addEventListener('click', () => {
  let login = document.getElementById('login');
  let senha = document.getElementById('senha');
  if (login.value === 'tryber@teste.com' && senha.value === '123456') {
    alert ('"Olá, Tryber!"');
  } else {
    alert ('Login ou senha inválidos.');
  }
})