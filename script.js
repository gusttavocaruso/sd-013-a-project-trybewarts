const btnlogin = document.getElementById('btnLogin');
btnlogin.addEventListener('click', () => {
  const login = document.getElementById('login').value;
  const senha = document.getElementById('senha').value;

  if (login === 'tryber@teste.com') {
    if (senha === '123456') {
      alert('Olá, Tryber!');
    }
  } else {
    alert('Login ou senha inválidos.');
  }
});
