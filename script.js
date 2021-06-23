function loginAuth() {
  const submitButton = document.querySelector('#login-button');

  submitButton.addEventListener('click', () => {
    const loginButton = document.getElementById('login').value;
    const passwordButton = document.getElementById('password').value;

    if (loginButton.value == 'tryber@teste.com' && passwordButton.value == '123456') {
      alert("Olá, Tryber!");
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
