// Puxa o botão de aceitar os termos
const agreement = document.getElementById('agreement');
// Puxa o botão de enviar
const submit = document.getElementById('submit-btn');
// Habilita o botão de enviar ao aceitar os termos
agreement.onchange = () => {
  if (submit.disabled === true) {
    submit.disabled = false;
  } else {
    submit.disabled = true;
  }
};

// validaLogin
function validaLogin() {
  const log = document.getElementById('Login');
  const s = document.getElementById('Senha');
  // Puxa o botão de login
  const loginButton = document.getElementById('login-button');
  loginButton.addEventListener('click', () => {
    if (log.value === 'tryber@teste.com' && s.value === '123456') {
      alert('Olá, Tryber!');
    } else {
      alert('Login ou senha inválidos.');
    }
  });
}
validaLogin();
