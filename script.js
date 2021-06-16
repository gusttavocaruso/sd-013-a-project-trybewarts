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
const submitButton = document.getElementById('submit-btn');
const checkAgree = document.getElementById('agreement');
checkAgree.addEventListener('click', () => {
  if (checkAgree.checked) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
});
