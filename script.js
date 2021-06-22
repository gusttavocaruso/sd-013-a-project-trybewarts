function req3() {
  const login = document.querySelector('#login');
  const senha = document.querySelector('#senha');
  if (login.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}
document.addEventListener('submit', req3);

const agreement = document.getElementById('agreement');
agreement.addEventListener('click', () => {
  const submit = document.getElementById('submit-btn');
  if (agreement.checked === true) {
    submit.disabled = false;
  } else {
    submit.disabled = true;
  }
});

const caracteres = document.getElementById('textarea');
caracteres.addEventListener('keyup', (event) => {
  const counter = document.getElementById('counter');
  const caractereesDigitados = caracteres.value.length;
  const limite = 500;
  event = limite - caractereesDigitados;
  counter.innerHTML = event;
});
