function loginAuth() {
  const submitButton = document.querySelector('#login-button');

  submitButton.addEventListener('click', () => {
    const loginButton = document.querySelector('#login').value;
    const passwordButton = document.querySelector('#password').value;

    if (loginButton === 'tryber@teste.com' && passwordButton === '123456') {
      alert('Olá, Tryber!');
    } else {
      alert('Login ou senha inválidos.');
    }
  });
}

loginAuth();

function enableButton() {
  const agreement = document.querySelector('#agreement');
  const button = document.querySelector('#submit-btn');

  agreement.addEventListener('click', () => {
    if (button.disabled === true) {
      button.disabled = false;
    } else {
      button.disabled = true;
    }
  });
}

enableButton();
