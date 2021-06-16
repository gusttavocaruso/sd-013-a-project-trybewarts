const login = document.getElementById('login');
const senha = document.getElementById('senha');
const buttonLogin = document.getElementById('buttonLogin');

function validation() {
  if ((login.value !== 'tryber@teste.com') && (senha.value !== '123456')) {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
}

buttonLogin.addEventListener('click', validation);
