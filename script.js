const buttonForm = document.getElementById('login-button');
buttonForm.addEventListener('click', () => {
  const loginValue = document.getElementById('form-login').value;
  const passwordValue = document.getElementById('form-password').value;
  if (loginValue === 'tryber@teste.com' && passwordValue === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
});
