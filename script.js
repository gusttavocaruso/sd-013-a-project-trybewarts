const buttonL = document.getElementById('entrar-button');

buttonL.addEventListener('click', (e) => {
  e.preventDefault();
  const login = document.getElementById('login');
  const senha = document.getElementById('senha');
  if (login.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
});

const btn = document.getElementById('submit-btn');
const agree = document.getElementById('agreement');

agree.addEventListener('change', (event) => {
  if (event.target.checked) {
    btn.disabled = false;
  } else {
    btn.disabled = true;
  }
}, false);
