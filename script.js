const login = document.querySelector('input[name=login');
const senha = document.querySelector('input[name=senha');
const pressButton = document.querySelector('button[name=button');
const submitBtn = document.getElementById('submit-btn');
const agreement = document.getElementById('agreement');
submitBtn.disable = true;

pressButton.addEventListener('click', () => {
  if (login.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
});

function test() {
  if (agreement.checked) {
    console.log('sim');
    submitBtn.disable = false;
  } else {
    console.log('não');
    submitBtn.disable = true;
  }
}
agreement.addEventListener('click', test);
