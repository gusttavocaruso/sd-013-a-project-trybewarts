const submitButton = document.querySelector('.login-button');

function submitLogin() {
  submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    const senha = document.querySelector('#senha-usuario');
    const login = document.querySelector('#login-usuario');
    if (login.value === 'trybe@teste.com' && senha.value === '123456') {
      alert('Olá, Tryber!');
    } else {
      alert('Login ou senha inválidos.');
    }
  });
}

submitLogin();
