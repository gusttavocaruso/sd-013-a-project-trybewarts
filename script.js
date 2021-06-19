function loginAuth() {
  submitButton = document.querySelector('#login-button');

  submitButton.addEventListener('click', () => {
  let loginButton = document.querySelector('#login').value;
  let passwordButton = document.querySelector('#password').value;

    if (loginButton === 'tryber@teste.com' && passwordButton === '123456') {
      alert('Olá, Tryber!');
    } else {
      alert('Login ou senha inválidos.');
    }
  });
}

loginAuth();
