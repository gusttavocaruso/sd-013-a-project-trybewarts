const loginInput = document.querySelector('#login-input');
const passwordInput = document.querySelector('#password-input');
const submtitButton = document.getElementById('submit-btn');
const agreementCheck = document.getElementById('agreement');
const loginButton = document.getElementById('login-button');

// Função para dar o alerta no caso de o login e senha estarem corretos ou não.
function loginAlert() {
  if ((loginInput.value !== 'tryber@teste.com') || (passwordInput.value !== '123456')) {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
}

loginButton.addEventListener('click', loginAlert);

// Função para abilitar o botão caso o "checkbox" esteja selecionado.
function enableBtn() {
  if (agreementCheck.checked) {
    submtitButton.removeAttribute('disabled');
  } else {
    submtitButton.setAttribute('disabled', 'disabled');
  }
}

agreementCheck.addEventListener('click', enableBtn);

