const buttonL = document.getElementById('login-button');

buttonL.addEventListener('click', (e) => {
  e.preventDefault();
  const login = document.getElementById('login');
  const senha = document.getElementById('senha');
  if (login.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
});
