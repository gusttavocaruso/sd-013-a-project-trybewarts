const loginButton = document.querySelector('#login-button');
const loginInput = document.querySelector('#login-input');
const passwordInput = document.querySelector('#password-input');


function loginAlert() {
  if (loginInput.value !== 'tryber@teste.com' || passwordInput.value !== '123456789'){
    alert('Login ou senha inválidos');
  } else {
    alert('Olá, Tryber!');
  }
}

loginButton.addEventListener('click', loginAlert);


