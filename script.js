const loginButton = document.getElementById('submit-login');
loginButton.addEventListener('click', () => {
  const login = document.getElementById('login');
  const senha = document.getElementById('senha');
  const senhaCorreta = '123456';
  const loginCorreto = 'tryber@teste.com';
  if (login.value !== loginCorreto && senha.value !== senhaCorreta) {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
});

function count() {
  const maxCharacters = 500;
  const textArea = document.getElementById('textarea').value;
  document.getElementById('counter').textContent = maxCharacters - textArea.length;
}

function countCharacter() {
  document.getElementById('counter').textContent = 500;
  const timeInMs = 10;
  const textArea = document.getElementById('textarea');
  textArea.addEventListener('keyup', () => { setTimeout(count, timeInMs); });
}
countCharacter();
