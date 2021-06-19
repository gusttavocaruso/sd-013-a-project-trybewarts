const loginUser = document.getElementById('login');
const passwordUser = document.getElementById('senha');
const buttonClick = document.getElementById('button1');

function gerarAlerta() {
  if ((loginUser.value === 'tryber@teste.com') && (passwordUser.value === '123456')) {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

buttonClick.addEventListener('click', gerarAlerta);
