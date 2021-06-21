const botao = document.querySelector('.botao');
const senha = document.getElementById('senha');
const login = document.getElementById('login');

function loginOk() {
  if ((login.value === 'tryber@teste.com') && (senha.value === '123456')) {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}
botao.addEventListener('click', loginOk);
