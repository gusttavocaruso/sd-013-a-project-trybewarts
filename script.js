const loginButton = document.getElementById('login-button');
const loginInput = document.getElementById('login-input');
const passwordInput = document.getElementById('password-input');
const disableButton = document.getElementById('submit-btn').disabled;
const agreement = document.getElementById('agreement');


function loginAlert() {
  if ((loginInput.value !== 'tryber@teste.com') || (passwordInput.value !== '123456')){
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
}

loginButton.addEventListener('click', loginAlert);

function disableBtn () {
  if () {
    
  }
}

disableBtn();


