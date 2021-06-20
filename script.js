// Requisito 3
function buttonLogin() {
  const login = document.getElementById('login');
  const senha = document.getElementById('senha');
  const button = document.getElementById('button');

  button.addEventListener('click', () => {
    if ((login.value === 'tryber@teste.com') && (senha.value === '123456')) {
      alert('Olá, Tryber!');
    } else {
      alert('Login ou senha inválidos.');
    }
  });
}
buttonLogin();
